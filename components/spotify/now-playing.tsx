"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { BatteryMedium, MapPinOff, Wifi, RotateCw } from "lucide-react";

interface NowPlayingData {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
  lastPlayedAt?: string;
}

const CACHE_KEY = "spotify:cached-track";

export default function NowPlaying() {
  const [data, setData] = useState<NowPlayingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [bgGradient, setBgGradient] = useState<string>(
    "linear-gradient(to bottom, rgb(66, 80, 98), rgb(44, 53, 66))",
  );
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const canAnimateRef = useRef(true);

  const handleGlareIn = () => {
    const el = glareRef.current;
    if (!el || !canAnimateRef.current) return;

    canAnimateRef.current = false;

    el.style.transition = "none";
    el.style.backgroundPosition = "-100% -100%, 0 0";
    requestAnimationFrame(() => {
      el.style.transition = "800ms ease";
      el.style.backgroundPosition = "150% 150%, 0 0";
    });

    // Re-enable animation after 1.5 seconds
    setTimeout(() => {
      canAnimateRef.current = true;
    }, 3000);
  };

  const handleGlareOut = () => {
    // Do nothing - glare stays in place after mouse enter
  };

  const extractDominantColor = (imageUrl: string) => {
    const img = new window.Image();
    img.crossOrigin = "Anonymous";

    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;

      canvas.width = 100;
      canvas.height = 100;
      ctx.drawImage(img, 0, 0, 100, 100);

      try {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        // Color quantization - find dominant colors
        const colorMap: { [key: string]: number } = {};
        const step = 4; // RGBA

        // Sample pixels and group similar colors
        for (let i = 0; i < data.length; i += step * 10) {
          const r = Math.floor(data[i] / 10) * 10;
          const g = Math.floor(data[i + 1] / 10) * 10;
          const b = Math.floor(data[i + 2] / 10) * 10;
          const brightness = (r + g + b) / 3;

          // Skip very dark and very light colors
          if (brightness < 20 || brightness > 240) continue;

          const key = `${r},${g},${b}`;
          colorMap[key] = (colorMap[key] || 0) + 1;
        }

        // Find the most common color
        let dominantColor = [66, 80, 98]; // Default fallback
        let maxCount = 0;

        for (const [color, count] of Object.entries(colorMap)) {
          if (count > maxCount) {
            maxCount = count;
            dominantColor = color.split(",").map(Number);
          }
        }

        let [r, g, b] = dominantColor;

        // Boost saturation slightly for more vibrant colors
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const saturation = max === 0 ? 0 : (max - min) / max;

        if (saturation > 0.1) {
          const boost = 1.2;
          r = Math.min(255, Math.floor(r + (r - min) * (boost - 1)));
          g = Math.min(255, Math.floor(g + (g - min) * (boost - 1)));
          b = Math.min(255, Math.floor(b + (b - min) * (boost - 1)));
        }

        // Create multiple gradient stops for smoother transition
        const stops = [
          { pos: 0, mult: 0.9 },
          { pos: 30, mult: 0.7 },
          { pos: 70, mult: 0.5 },
          { pos: 100, mult: 0.3 },
        ];

        const gradientStops = stops
          .map((stop) => {
            const sr = Math.floor(r * stop.mult);
            const sg = Math.floor(g * stop.mult);
            const sb = Math.floor(b * stop.mult);
            return `rgb(${sr}, ${sg}, ${sb}) ${stop.pos}%`;
          })
          .join(", ");

        const gradient = `linear-gradient(to bottom, ${gradientStops})`;
        setBgGradient(gradient);
      } catch (error) {
        console.error("Error extracting color:", error);
      }
    };

    img.src = imageUrl;
  };

  const handleManualRefresh = async () => {
    if (refreshing) return; // Prevent multiple simultaneous refreshes

    setRefreshing(true);
    try {
      const response = await fetch("/api/spotify/now-playing");
      if (response.ok) {
        const nowPlaying = await response.json();
        setData(nowPlaying);

        // Save to localStorage
        localStorage.setItem(CACHE_KEY, JSON.stringify(nowPlaying));

        if (nowPlaying?.albumImageUrl) {
          extractDominantColor(nowPlaying.albumImageUrl);
        }
      }
    } catch (error) {
      console.error("Error manually refreshing:", error);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    let eventSource: EventSource | null = null;
    let reconnectTimeout: NodeJS.Timeout | null = null;

    // Load cached data from localStorage on mount
    const loadCachedData = () => {
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const cachedData = JSON.parse(cached);
          setData(cachedData);
          setLoading(false);

          if (cachedData?.albumImageUrl) {
            extractDominantColor(cachedData.albumImageUrl);
          }
        }
      } catch (error) {
        console.error("Error loading cached data:", error);
      }
    };

    // Load cached data immediately
    loadCachedData();

    const connect = () => {
      // Close existing connection if any
      if (eventSource) {
        eventSource.close();
      }

      eventSource = new EventSource("/api/spotify/stream");

      eventSource.onmessage = (event) => {
        try {
          const nowPlaying = JSON.parse(event.data);
          setData(nowPlaying);
          setLoading(false);

          // Save to localStorage for future sessions
          localStorage.setItem(CACHE_KEY, JSON.stringify(nowPlaying));

          if (nowPlaying?.albumImageUrl) {
            extractDominantColor(nowPlaying.albumImageUrl);
          }
        } catch (error) {
          console.error("Error parsing SSE data:", error);
        }
      };

      eventSource.onerror = (error) => {
        console.error("SSE connection error:", error);
        eventSource?.close();

        // Attempt to reconnect after 5 seconds
        reconnectTimeout = setTimeout(() => {
          console.log("Reconnecting to SSE...");
          connect();
        }, 5000);
      };

      eventSource.onopen = () => {
        console.log("SSE connection established");
      };
    };

    connect();

    return () => {
      if (eventSource) {
        eventSource.close();
      }
      if (reconnectTimeout) {
        clearTimeout(reconnectTimeout);
      }
    };
  }, []);

  if (loading) {
    return (
      <div className="relative flex flex-col bg-black items-center justify-center gap-2 w-full h-full overflow-hidden">
        <span className="text-accent text-xs">connecting</span>
        <div className="w-5 h-5 border-2 border-accent border-t-white/70 rounded-full animate-spin" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="relative flex flex-col bg-black items-center justify-center w-full h-full overflow-hidden">
        <span className="text-accent text-xs">no data available</span>
        <span className="text-accent text-xs">player is probably broken</span>
      </div>
    );
  }

  const formatLastPlayed = (timestamp?: string) => {
    if (!timestamp) return "offline";

    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) {
      return "less than a minute ago";
    } else if (diffMins < 60) {
      return `${diffMins}m ago`;
    } else if (diffHours < 24) {
      return `${diffHours}h ago`;
    } else if (diffDays < 30) {
      return `${diffDays}d ago`;
    } else {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    }
  };

  return (
    <div
      className="relative flex flex-col w-full h-full overflow-hidden"
      style={{
        background: bgGradient,
        transition: "background 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      onMouseEnter={handleGlareIn}
      onMouseLeave={handleGlareOut}
    >
      <canvas ref={canvasRef} className="hidden" />

      {/* Glare overlay */}
      <div
        ref={glareRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(-45deg,
            transparent 0%,
            transparent 40%,
            rgba(255, 255, 255, 0.03) 45%,
            rgba(255, 255, 255, 0.15) 50%,
            rgba(255, 255, 255, 0.03) 55%,
            transparent 60%,
            transparent 100%)`,
          backgroundSize: "200% 200%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "-100% -100%, 0 0",
        }}
      />

      <div className="relative flex items-center justify-between px-2 pt-0.5 pb-0.5">
        <div className="flex items-center gap-1">
          <span className="text-white font-semibold text-[8px]">
            {new Date().toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </span>
          {/*<span className="text-white/90 text-[8px] font-medium">Music</span>*/}
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="text-white ">
            <MapPinOff size={10} />
          </div>
          <div className="text-white font-semibold -mt-[2px]">
            <Wifi size={12} />
          </div>
          <div className="text-white font-semibold">
            <BatteryMedium size={14} />
          </div>
        </div>
      </div>

      <div className="relative flex items-start gap-2 px-2 mt-0.5">
        {data.albumImageUrl && (
          <Image
            src={data.albumImageUrl}
            alt={data.album}
            width={65}
            height={65}
            className="rounded-md shadow-2xl flex-shrink-0"
          />
        )}
        <div className="flex flex-col justify-center flex-1 min-w-0 pt-1">
          <div className="flex items-center gap-1 mb-0.5">
            <h2 className="text-sm font-semibold text-white truncate">
              {data.title}
            </h2>
          </div>
          <p className="text-xs text-white/90 truncate mb-0.5">{data.artist}</p>
          <p className="text-[10px] text-white/60 truncate">{data.album}</p>
        </div>
      </div>

      <div className="relative mt-auto flex items-end justify-between px-2 pb-1.5">
        <div className="flex items-end justify-between gap-1.5">
          <div className="flex items-center gap-0.5 h-2 self-center">
            <div
              className={`w-0.5 bg-white/80 rounded-sm ${data.isPlaying ? "animate-bar-1" : ""}`}
              style={{ height: data.isPlaying ? undefined : "45%" }}
            />
            <div
              className={`w-0.5 bg-white/80 rounded-sm ${data.isPlaying ? "animate-bar-2" : ""}`}
              style={{ height: data.isPlaying ? undefined : "70%" }}
            />
            <div
              className={`w-0.5 bg-white/80 rounded-sm ${data.isPlaying ? "animate-bar-3" : ""}`}
              style={{ height: data.isPlaying ? undefined : "55%" }}
            />
            <div
              className={`w-0.5 bg-white/80 rounded-sm ${data.isPlaying ? "animate-bar-4" : ""}`}
              style={{ height: data.isPlaying ? undefined : "85%" }}
            />
            <div
              className={`w-0.5 bg-white/80 rounded-sm ${data.isPlaying ? "animate-bar-5" : ""}`}
              style={{ height: data.isPlaying ? undefined : "65%" }}
            />
            <div
              className={`w-0.5 bg-white/80 rounded-sm ${data.isPlaying ? "animate-bar-6" : ""}`}
              style={{ height: data.isPlaying ? undefined : "50%" }}
            />
          </div>
          <button
            onClick={handleManualRefresh}
            disabled={refreshing}
            className="text-background/70 hover:text-background cursor-pointer transition-colors disabled:opacity-50 ml-1"
            title="Refresh now"
          >
            <RotateCw size={12} className={refreshing ? "animate-spin" : ""} />
          </button>
        </div>
        <div className="flex items-center gap-2 self-end">
          <span className="text-white/70 text-end text-[10px] font-medium max-w-[120px] leading-tight">
            {data.isPlaying
              ? "listening now"
              : "last seen " + formatLastPlayed(data.lastPlayedAt)}
          </span>
        </div>
      </div>
    </div>
  );
}
