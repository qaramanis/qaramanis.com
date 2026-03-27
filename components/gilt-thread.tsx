"use client";

import { useRef, useEffect } from "react";

interface GiltThreadProps {
  color?: string;
  speed?: number;
  threadCount?: number;
  shape?: 1 | 2 | 3 | 4;
  trailLength?: number;
  className?: string;
}

function parseHex(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [
    parseInt(h.substring(0, 2), 16),
    parseInt(h.substring(2, 4), 16),
    parseInt(h.substring(4, 6), 16),
  ];
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

interface Sparkle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  decay: number;
  size: number;
}

interface TrailPoint {
  x: number;
  y: number;
  tx: number;
  ty: number;
}

interface Thread {
  fx: number;
  fy: number;
  px: number;
  py: number;
  mfx: number;
  mfy: number;
  ax: number;
  ay: number;
  speed: number;
  width: number;
  hue: number;
  sparkles: Sparkle[];
  trail: TrailPoint[];
}

export default function GiltThread({
  color = "#c8956c",
  speed = 1.0,
  threadCount = 5,
  shape = 1,
  trailLength = 600,
  className,
}: GiltThreadProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const DRAW_SPEED = speed;
    const THREAD_COUNT = threadCount;
    const SHAPE = shape;
    const TRAIL_MAX = trailLength;
    const PHI = 1.618033988749895;
    const LX = 0.58;
    const LY = -0.82;
    const DPR = 1; // #1: cap at 1

    // Derive all colors from the base color
    const [baseR, baseG, baseB] = parseHex(color);
    const glowColor = `${baseR},${baseG},${baseB}`;
    const sparkGlowR = lerp(baseR, 255, 0.3) | 0;
    const sparkGlowG = lerp(baseG, 255, 0.3) | 0;
    const sparkGlowB = lerp(baseB, 255, 0.3) | 0;
    const sparkCoreR = lerp(baseR, 255, 0.9) | 0;
    const sparkCoreG = lerp(baseG, 255, 0.9) | 0;
    const sparkCoreB = lerp(baseB, 255, 0.9) | 0;

    let needsResize = true;
    let W = 0;
    let H = 0;
    let mouseWarp = 0;
    let smoothWarp = 0;
    let smoothCX = 0;
    let smoothCY = 0;
    let mouseDown = false;
    let time = 0;
    let running = true;
    let visible = true;
    let prevTs = 0;

    function resize() {
      needsResize = false;
      const nw = Math.round(canvas!.clientWidth * DPR);
      const nh = Math.round(canvas!.clientHeight * DPR);
      if (nw !== W || nh !== H) {
        W = nw;
        H = nh;
        canvas!.width = W;
        canvas!.height = H;
      }
    }

    // ── Thread curve definitions ──
    const freqs: [number, number][] = [
      [3, 2 * PHI],
      [2, 3 * PHI],
      [5, 3 * PHI],
      [3 * PHI, 5],
      [4, 3 * PHI + 1],
      [2 * PHI, 5],
      [5, 4 * PHI],
      [3, 5 * PHI],
    ];

    function makeThread(idx: number): Thread {
      const f = freqs[idx % freqs.length];
      return {
        fx: f[0],
        fy: f[1],
        px: idx * 0.93 + 0.5,
        py: idx * 1.17 + 2.3,
        mfx: 0.11 + idx * 0.037,
        mfy: 0.13 + idx * 0.029,
        ax: 0.52 + (idx % 3) * 0.06,
        ay: 0.48 + ((idx + 1) % 3) * 0.06,
        speed: 0.55 + idx * 0.04,
        width: 2.2 + (idx % 3) * 0.6,
        hue: idx * 0.15,
        sparkles: [],
        trail: [],
      };
    }

    function pos(th: Thread, t: number) {
      const s = t * th.speed;
      const ax = th.ax * (1 + 0.18 * Math.sin(s * th.mfx));
      const ay = th.ay * (1 + 0.18 * Math.sin(s * th.mfy));
      const localShape = Math.round(SHAPE);
      const w = smoothWarp;

      if (localShape === 2) {
        const k = th.fx / th.fy + w * 0.3;
        const r = ax * Math.cos(k * s + th.px);
        return { x: r * Math.cos(s), y: r * Math.sin(s) };
      }
      if (localShape === 3) {
        const R = ax * 0.6;
        let rr = ax * (0.23 + w * 0.04);
        const d = ax * 0.45;
        const idxVal = (th.fx + th.fy) * 0.5;
        rr *= 0.7 + (idxVal % 3) * 0.15;
        const ratio = (R + rr) / rr;
        return {
          x:
            ((R + rr) * Math.cos(s + th.px) -
              d * Math.cos(ratio * s + th.px)) *
            0.9,
          y:
            ((R + rr) * Math.sin(s + th.py) -
              d * Math.sin(ratio * s + th.py)) *
            0.9,
        };
      }
      if (localShape === 4) {
        const bt = s * (0.4 + w * 0.05) + th.px;
        const expTerm =
          Math.exp(Math.cos(bt)) -
          2 * Math.cos(4 * bt) -
          Math.pow(Math.sin(bt / 12), 5);
        return {
          x: Math.sin(bt) * expTerm * ax * 0.28,
          y: Math.cos(bt) * expTerm * ay * 0.28,
        };
      }
      return {
        x: Math.sin(s * (th.fx + smoothWarp * 0.5) + th.px) * ax,
        y: Math.sin(s * (th.fy - smoothWarp * 0.3) + th.py) * ay,
      };
    }

    function tangent(th: Thread, t: number) {
      const dt = 0.0005;
      const a = pos(th, t - dt);
      const b = pos(th, t + dt);
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const len = Math.sqrt(dx * dx + dy * dy) || 1;
      return { x: dx / len, y: dy / len };
    }

    function metallicRGBA(
      tang: { x: number; y: number },
      hueShift: number,
      alpha: number,
    ) {
      const dot = tang.x * LX + tang.y * LY;
      const spec = dot * dot;
      const cross = Math.abs(-tang.y * LX + tang.x * LY);

      const brightness = spec * 0.5 + cross * 0.15 + hueShift * 0.05;
      let r = lerp(baseR, 255, brightness);
      let g = lerp(baseG, 255, brightness);
      let b = lerp(baseB, 255, brightness);

      r = Math.min(255, Math.max(baseR * 0.7, r)) | 0;
      g = Math.min(255, Math.max(baseG * 0.7, g)) | 0;
      b = Math.min(255, Math.max(baseB * 0.7, b)) | 0;

      return "rgba(" + r + "," + g + "," + b + "," + alpha.toFixed(3) + ")";
    }

    function addSparkle(th: Thread, x: number, y: number) {
      if (th.sparkles.length > 30) return;
      th.sparkles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        life: 1,
        decay: 0.018 + Math.random() * 0.022,
        size: (1 + Math.random() * 1.8) * DPR,
      });
    }

    function tickAndDrawSparkles(th: Thread) {
      ctx!.save();
      ctx!.globalCompositeOperation = "lighter";
      for (let i = th.sparkles.length - 1; i >= 0; i--) {
        const s = th.sparkles[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vx *= 0.95;
        s.vy *= 0.95;
        s.life -= s.decay;
        if (s.life <= 0) {
          th.sparkles.splice(i, 1);
          continue;
        }
        const a = s.life * s.life;
        const r = s.size * s.life;
        ctx!.fillStyle = `rgba(${sparkGlowR},${sparkGlowG},${sparkGlowB},${(a * 0.25).toFixed(3)})`;
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, r * 3, 0, 6.2832);
        ctx!.fill();
        ctx!.fillStyle = `rgba(${sparkCoreR},${sparkCoreG},${sparkCoreB},${(a * 0.85).toFixed(3)})`;
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, r, 0, 6.2832);
        ctx!.fill();
      }
      ctx!.restore();
    }

    function updateTrail(th: Thread, tNow: number) {
      smoothWarp += (mouseWarp - smoothWarp) * 0.03;
      smoothCX = W * 0.5;
      smoothCY = H * 0.5;

      const scale = Math.min(W, H) * 0.55;
      const p = pos(th, tNow);
      const tg = tangent(th, tNow);
      th.trail.push({
        x: smoothCX + p.x * scale,
        y: smoothCY + p.y * scale,
        tx: tg.x,
        ty: tg.y,
      });
      if (th.trail.length > TRAIL_MAX) {
        th.trail.shift();
      }
    }

    function drawThread(th: Thread, threadIdx: number) {
      const trail = th.trail;
      const len = trail.length;
      if (len < 2) return;

      const w = th.width * DPR;

      // Outer glow
      ctx!.save();
      ctx!.lineCap = "round";
      ctx!.lineJoin = "round";
      ctx!.lineWidth = w * 5;
      ctx!.strokeStyle = `rgba(${glowColor},0.04)`;
      ctx!.beginPath();
      ctx!.moveTo(trail[0].x, trail[0].y);
      for (let i = 1; i < len; i++) ctx!.lineTo(trail[i].x, trail[i].y);
      ctx!.stroke();
      ctx!.restore();

      // Inner glow
      ctx!.save();
      ctx!.lineCap = "round";
      ctx!.lineJoin = "round";
      ctx!.lineWidth = w * 2.6;
      ctx!.strokeStyle = `rgba(${glowColor},0.08)`;
      ctx!.beginPath();
      ctx!.moveTo(trail[0].x, trail[0].y);
      for (let i = 1; i < len; i++) ctx!.lineTo(trail[i].x, trail[i].y);
      ctx!.stroke();
      ctx!.restore();

      // Per-segment metallic body (#2: no shadow, no specular)
      for (let i = 1; i < len; i++) {
        const frac = i / len;
        const alpha = frac * frac;

        if (alpha < 0.003) continue;

        const a = trail[i - 1];
        const b = trail[i];

        const wm = 0.88 + 0.12 * Math.sin(frac * 20 + time * 3 + threadIdx);
        const lw = w * wm;

        const tang = {
          x: (a.tx + b.tx) * 0.5,
          y: (a.ty + b.ty) * 0.5,
        };
        ctx!.save();
        ctx!.lineCap = "round";
        ctx!.lineWidth = lw;
        ctx!.strokeStyle = metallicRGBA(tang, th.hue, 0.82 * alpha);
        ctx!.beginPath();
        ctx!.moveTo(a.x, a.y);
        ctx!.lineTo(b.x, b.y);
        ctx!.stroke();
        ctx!.restore();
      }

      // Tip sparkle
      const tip = trail[len - 1];
      if (Math.random() < 0.55) {
        addSparkle(th, tip.x, tip.y);
      }

      tickAndDrawSparkles(th);
    }

    // ── Mouse / touch handlers ──
    function onMouseDown(e: MouseEvent) {
      mouseDown = true;
      mouseWarp = (e.clientX / canvas!.clientWidth - 0.5) * 4;
    }
    function onMouseMove(e: MouseEvent) {
      if (mouseDown) {
        mouseWarp = (e.clientX / canvas!.clientWidth - 0.5) * 4;
      }
    }
    function onMouseUp() {
      mouseDown = false;
      mouseWarp = 0;
    }
    function onMouseLeave() {
      mouseDown = false;
      mouseWarp = 0;
    }
    function onTouchStart(e: TouchEvent) {
      mouseDown = true;
      mouseWarp = (e.touches[0].clientX / canvas!.clientWidth - 0.5) * 4;
    }
    function onTouchMove(e: TouchEvent) {
      e.preventDefault();
      if (mouseDown) {
        mouseWarp = (e.touches[0].clientX / canvas!.clientWidth - 0.5) * 4;
      }
    }
    function onTouchEnd() {
      mouseDown = false;
      mouseWarp = 0;
    }

    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("touchstart", onTouchStart, { passive: false });
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });
    canvas.addEventListener("touchend", onTouchEnd);

    // ── Init threads ──
    let threads: Thread[] = [];
    const numThreads = Math.max(2, Math.min(8, Math.round(THREAD_COUNT)));
    for (let i = 0; i < numThreads; i++) {
      threads.push(makeThread(i));
    }

    // Pre-run to fill trail buffers
    resize();
    smoothCX = W * 0.5;
    smoothCY = H * 0.5;
    for (let preFrame = 0; preFrame < 400; preFrame++) {
      time += 0.016 * DRAW_SPEED;
      for (let i = 0; i < threads.length; i++) {
        updateTrail(threads[i], time + i * 0.4);
      }
    }

    // ── Main loop ──
    function frame(ts: number) {
      if (!running || !visible) return;

      if (prevTs === 0) prevTs = ts;
      let dt = Math.min((ts - prevTs) / 1000, 0.05);
      prevTs = ts;
      if (prefersReduced) dt = 0;

      time += dt * DRAW_SPEED;

      if (needsResize) resize();

      for (let i = 0; i < threads.length; i++) {
        updateTrail(threads[i], time + i * 0.4);
      }

      ctx!.fillStyle = "#0a0a0a";
      ctx!.fillRect(0, 0, W, H);

      for (let i = 0; i < threads.length; i++) {
        drawThread(threads[i], i);
      }

      requestAnimationFrame(frame);
    }

    function onResize() {
      needsResize = true;
    }

    function onVisibilityChange() {
      running = !document.hidden;
      if (running && visible) {
        prevTs = 0;
        requestAnimationFrame(frame);
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && running) {
          prevTs = 0;
          requestAnimationFrame(frame);
        }
      },
      { threshold: 0 },
    );
    observer.observe(canvas);

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibilityChange);
    requestAnimationFrame(frame);

    return () => {
      running = false;
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      canvas.removeEventListener("mousedown", onMouseDown);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
    };
  }, [color, speed, threadCount, shape, trailLength]);

  return (
    <canvas
      ref={canvasRef}
      className={`block w-full h-full ${className ?? ""}`}
    />
  );
}
