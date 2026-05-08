"use client";

import { useMemo, useSyncExternalStore } from "react";

interface Snowflake {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
  opacity: number;
}

function generateSnowflakes(): Snowflake[] {
  const flakes: Snowflake[] = [];
  const numberOfFlakes = 50;

  for (let i = 0; i < numberOfFlakes; i++) {
    const duration = 20 + Math.random() * 30; // 20-50 seconds
    flakes.push({
      id: i,
      left: Math.random() * 100,
      animationDuration: duration,
      // Use negative delay to make some snowflakes appear mid-fall on load
      animationDelay: -(Math.random() * duration),
      size: 10 + Math.random() * 20, // 10-30px
      opacity: 0.3 + Math.random() * 0.4, // 0.3-0.7 opacity
    });
  }

  return flakes;
}

const emptySubscribe = () => () => {};

export default function SnowfallBackground() {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const snowflakes = useMemo(
    () => (isClient ? generateSnowflakes() : []),
    [isClient],
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake absolute"
          style={{
            left: `${flake.left}%`,
            fontSize: `${flake.size}px`,
            opacity: flake.opacity,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `${flake.animationDelay}s`,
          }}
        >
          ❄
        </div>
      ))}
      <style jsx>{`
        @keyframes fall {
          0% {
            top: -100px;
            transform: rotate(0deg);
          }
          100% {
            top: calc(100% + 100px);
            transform: rotate(360deg);
          }
        }

        .snowflake {
          position: absolute;
          animation: fall linear infinite;
          color: rgba(255, 255, 255, 0.9);
          user-select: none;
        }
      `}</style>
    </div>
  );
}
