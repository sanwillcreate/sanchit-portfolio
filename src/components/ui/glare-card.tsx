"use client";

import { cn } from "@/lib/utils";
import { useRef } from "react";

export const GlareCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const isPointerInside = useRef(false);
  const refElement = useRef<HTMLDivElement>(null);

  const state = useRef({
    glare: {
      x: 50,
      y: 50,
    },
    background: {
      x: 50,
      y: 50,
    },
    rotate: {
      x: 0,
      y: 0,
    },
  });

  const containerStyle = {
    "--m-x": "50%",
    "--m-y": "50%",
    "--r-x": "0deg",
    "--r-y": "0deg",
    "--bg-x": "50%",
    "--bg-y": "50%",
    "--duration": "300ms",
    "--opacity": "0",
    "--radius": "16px",
    "--easing": "ease",
  } as React.CSSProperties;

  const updateStyles = () => {
    if (!refElement.current) return;

    const { background, rotate, glare } = state.current;

    refElement.current.style.setProperty("--m-x", `${glare.x}%`);
    refElement.current.style.setProperty("--m-y", `${glare.y}%`);
    refElement.current.style.setProperty("--r-x", `${rotate.x}deg`);
    refElement.current.style.setProperty("--r-y", `${rotate.y}deg`);
    refElement.current.style.setProperty("--bg-x", `${background.x}%`);
    refElement.current.style.setProperty("--bg-y", `${background.y}%`);
  };

  return (
    <div
      ref={refElement}
      style={containerStyle}
      className="
        relative
        isolate
        w-full
        [perspective:600px]
      "
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const percentage = {
          x: (x / rect.width) * 100,
          y: (y / rect.height) * 100,
        };

        const delta = {
          x: percentage.x - 50,
          y: percentage.y - 50,
        };

        const { background, rotate, glare } = state.current;

        background.x = 50 + percentage.x / 4 - 12.5;
        background.y = 50 + percentage.y / 3 - 16.67;

        rotate.x = -(delta.x / 3.5) * 0.4;
        rotate.y = (delta.y / 2) * 0.4;

        glare.x = percentage.x;
        glare.y = percentage.y;

        updateStyles();
      }}
      onPointerEnter={() => {
        isPointerInside.current = true;

        if (refElement.current) {
          refElement.current.style.setProperty("--opacity", "1");

          setTimeout(() => {
            if (isPointerInside.current) {
              refElement.current?.style.setProperty("--duration", "0s");
            }
          }, 300);
        }
      }}
      onPointerLeave={() => {
        isPointerInside.current = false;

        if (refElement.current) {
          refElement.current.style.setProperty("--duration", "300ms");
          refElement.current.style.setProperty("--opacity", "0");
          refElement.current.style.setProperty("--r-x", "0deg");
          refElement.current.style.setProperty("--r-y", "0deg");
        }
      }}
    >
      {/* Actual card */}
      <div
        className="
          relative
          w-full
          overflow-hidden
          rounded-[var(--radius)]
          border
          border-border
          bg-background
          [transform:rotateY(var(--r-x))_rotateX(var(--r-y))]
          transition-transform
          duration-[var(--duration)]
          ease-[var(--easing)]
          will-change-transform
        "
      >
        {/* Content */}
        <div
          className={cn(
            "relative z-10 w-full",
            className
          )}
        >
          {children}
        </div>

        {/* Soft glare */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-20
            opacity-[var(--opacity)]
            mix-blend-screen
            transition-opacity
            duration-[var(--duration)]
            ease-[var(--easing)]
          "
          style={{
            background:
              "radial-gradient(farthest-corner circle at var(--m-x) var(--m-y), rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.10) 25%, transparent 70%)",
          }}
        />

        {/* Accent glare */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-20
            opacity-[var(--opacity)]
            mix-blend-screen
            transition-opacity
            duration-[var(--duration)]
            ease-[var(--easing)]
          "
          style={{
            background:
              "radial-gradient(farthest-corner circle at var(--m-x) var(--m-y), color-mix(in oklch, var(--accent) 25%, transparent) 0%, transparent 65%)",
          }}
        />
      </div>
    </div>
  );
};