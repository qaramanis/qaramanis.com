"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";

const BLADE_COUNT = 28;

function generateBlades(
  cx: number,
  cy: number,
  r: number,
  count: number,
): string[] {
  const paths: string[] = [];
  const swirl = ((Math.PI * 2) / count) * 3.0;
  const innerR = r * 0.32;

  for (let i = 0; i < count; i++) {
    if (i % 2 !== 0) continue;

    const a1 = (i / count) * Math.PI * 2;
    const a2 = ((i + 1) / count) * Math.PI * 2;

    const ox1 = cx + r * Math.cos(a1);
    const oy1 = cy + r * Math.sin(a1);
    const ox2 = cx + r * Math.cos(a2);
    const oy2 = cy + r * Math.sin(a2);

    const cp1x = cx + innerR * Math.cos(a1 - swirl);
    const cp1y = cy + innerR * Math.sin(a1 - swirl);
    const cp2x = cx + innerR * Math.cos(a2 - swirl);
    const cp2y = cy + innerR * Math.sin(a2 - swirl);

    paths.push(
      `M ${cx.toFixed(1)} ${cy.toFixed(1)} ` +
        `Q ${cp1x.toFixed(1)} ${cp1y.toFixed(1)} ${ox1.toFixed(1)} ${oy1.toFixed(1)} ` +
        `A ${r} ${r} 0 0 1 ${ox2.toFixed(1)} ${oy2.toFixed(1)} ` +
        `Q ${cp2x.toFixed(1)} ${cp2y.toFixed(1)} ${cx.toFixed(1)} ${cy.toFixed(1)} Z`,
    );
  }
  return paths;
}

type Phase =
  | "spiral"
  | "textIn"
  | "holdCenter"
  | "moveLeft"
  | "holdFinal"
  | "fadeOut";

const PHASE_ORDER: Phase[] = [
  "spiral",
  "textIn",
  "holdCenter",
  "moveLeft",
  "holdFinal",
  "fadeOut",
];

const PHASE_DURATIONS: Record<Phase, number> = {
  spiral: 2000,
  textIn: 500,
  holdCenter: 2000,
  moveLeft: 1500,
  holdFinal: 2500,
  fadeOut: 1000,
};

const SVG_SIZE = 560;
const CX = SVG_SIZE / 2;
const CY = SVG_SIZE / 2;
const DISK_R = 175;
const TEXT_R = 228;

const EASE_SMOOTH = [0.4, 0, 0.2, 1] as const;

function AnimationCycle({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<Phase>("spiral");

  useEffect(() => {
    const duration = PHASE_DURATIONS[phase];
    const timer = setTimeout(() => {
      const idx = PHASE_ORDER.indexOf(phase);
      if (idx === PHASE_ORDER.length - 1) {
        onComplete();
      } else {
        setPhase(PHASE_ORDER[idx + 1]);
      }
    }, duration);
    return () => clearTimeout(timer);
  }, [phase, onComplete]);

  const blades = useMemo(() => generateBlades(CX, CY, DISK_R, BLADE_COUNT), []);

  const topArcD = `M ${CX - TEXT_R},${CY} A ${TEXT_R},${TEXT_R} 0 0,1 ${CX + TEXT_R},${CY}`;
  const bottomArcD = `M ${CX - TEXT_R},${CY} A ${TEXT_R},${TEXT_R} 0 0,0 ${CX + TEXT_R},${CY}`;

  const phaseIdx = PHASE_ORDER.indexOf(phase);
  const isCollapsed = phaseIdx >= 3;
  const showCurvedText = phaseIdx >= 1;
  const showGalleryText = phaseIdx >= 3;
  const isFadingOut = phase === "fadeOut";

  return (
    <motion.div
      className="w-full h-full flex items-center justify-center text-foreground relative bg-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: isFadingOut ? 0 : 1 }}
      transition={{
        duration: phase === "spiral" ? 0.5 : 1,
        ease: "easeInOut",
      }}
    >
      {/* Spiral + curved text group */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          scale: isCollapsed ? 0.45 : 1,
          x: isCollapsed ? "-25%" : "0%",
        }}
        transition={{ duration: 1.5, ease: EASE_SMOOTH }}
      >
        <svg
          viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
          className="w-[70%] h-auto max-h-[70%]"
        >
          <defs>
            <clipPath id="dga-diskClip">
              <circle cx={CX} cy={CY} r={DISK_R} />
            </clipPath>
            <path id="dga-topArc" d={topArcD} fill="none" />
            <path id="dga-bottomArc" d={bottomArcD} fill="none" />
          </defs>

          {/* Rotating spiral disk */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: `${CX}px ${CY}px` }}
          >
            <circle cx={CX} cy={CY} r={DISK_R} className="fill-background" />
            <g clipPath="url(#dga-diskClip)">
              {blades.map((d, i) => (
                <path key={i} d={d} className="fill-foreground" />
              ))}
            </g>
          </motion.g>

          {/* Outer ring */}
          <circle
            cx={CX}
            cy={CY}
            r={DISK_R + 1}
            fill="none"
            className="stroke-background"
            strokeWidth="2.5"
          />

          {/* Curved text — top */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: showCurvedText ? 1 : 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <text
              className="fill-background"
              textAnchor="middle"
              fontSize="25"
              letterSpacing="12"
              style={{ fontFamily: "Paggoda, Satoshi, sans-serif" }}
            >
              <textPath href="#dga-topArc" startOffset="50%">
                PERSONAL WORKS
              </textPath>
            </text>
          </motion.g>

          {/* Curved text — bottom (dy shifts text outside the arc) */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: showCurvedText ? 1 : 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <text
              className="fill-background"
              textAnchor="middle"
              fontSize="25"
              letterSpacing="12"
              dy="20"
              style={{ fontFamily: "Paggoda, Satoshi, sans-serif" }}
            >
              <textPath href="#dga-bottomArc" startOffset="50%">
                PERSONAL WORKS
              </textPath>
            </text>
          </motion.g>
        </svg>
      </motion.div>

      {/* "digital gallery" text — right side */}
      <motion.div
        className="absolute right-[8%] top-1/2 -translate-y-1/2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: showGalleryText ? 1 : 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: showGalleryText ? 0.9 : 0,
        }}
      >
        <p
          className="text-background leading-[0.9] tracking-tight text-4xl md:text-4xl lg:text-5xl whitespace-nowrap"
          style={{ fontFamily: "Paggoda, Satoshi, sans-serif" }}
        >
          digital gallery
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function DigitalGalleryAnimation({ className }: { className?: string }) {
  const [cycle, setCycle] = useState(0);
  const handleComplete = useCallback(() => setCycle((c) => c + 1), []);

  return (
    <div className={`w-full h-full ${className ?? ""}`}>
      <AnimationCycle key={cycle} onComplete={handleComplete} />
    </div>
  );
}
