"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface SignatureIntroProps {
  onComplete?: () => void;
  duration?: number;
}

export function SignatureIntro({ onComplete, duration = 3.5 }: SignatureIntroProps) {
  const [animationDone, setAnimationDone] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const stableOnComplete = useCallback(() => {
    onComplete?.();
  }, [onComplete]);

  useEffect(() => {
    // Load cursive font
    const font = new FontFace(
      "Mrs Saint Delafield",
      "url(https://fonts.gstatic.com/s/mrssaintdelafield/v13/v6-IGRDKFGPZ4hv8vmNZQmADKRWyMnY.woff2)"
    );
    font.load().then((loaded) => {
      document.fonts.add(loaded);
      setFontLoaded(true);
    }).catch(() => {
      // Fallback if font fails
      setFontLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (!fontLoaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // High DPI
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    // Text config
    const fontSize = Math.min(w * 0.14, 120);
    ctx.font = `${fontSize}px "Mrs Saint Delafield", cursive`;
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 1.2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.fillStyle = "transparent";

    const text = "Yashi Gupta";
    const textWidth = ctx.measureText(text).width;
    const startX = (w - textWidth) / 2;
    const startY = h * 0.55;

    // Get text path points by sampling
    // We'll animate a reveal mask from left to right
    const totalDuration = duration * 1000;
    const startTime = performance.now();

    // Draw underline params
    const underlineY = startY + fontSize * 0.15;
    const underlineStartX = startX - 20;
    const underlineEndX = startX + textWidth + 20;

    function draw(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / totalDuration, 1);
      // Eased progress
      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      ctx!.clearRect(0, 0, w, h);

      // Clip to reveal text progressively left-to-right
      const revealX = startX + textWidth * eased;

      ctx!.save();
      ctx!.beginPath();
      ctx!.rect(0, 0, revealX, h);
      ctx!.clip();

      // Draw signature text as stroke
      ctx!.strokeText(text, startX, startY);

      ctx!.restore();

      // Underline flourish (starts at 70% progress)
      if (progress > 0.7) {
        const uProgress = Math.min((progress - 0.7) / 0.3, 1);
        const uEased = 1 - Math.pow(1 - uProgress, 3);
        const uCurrentX = underlineStartX + (underlineEndX - underlineStartX) * uEased;

        ctx!.save();
        ctx!.globalAlpha = 0.3;
        ctx!.lineWidth = 0.8;
        ctx!.beginPath();
        ctx!.moveTo(underlineStartX, underlineY);

        // Slight curve
        const cpX = (underlineStartX + uCurrentX) / 2;
        const cpY = underlineY + 15;
        ctx!.quadraticCurveTo(cpX, cpY, uCurrentX, underlineY - 5);
        ctx!.stroke();
        ctx!.restore();
      }

      if (progress < 1) {
        requestAnimationFrame(draw);
      }
    }

    requestAnimationFrame(draw);

    timerRef.current = setTimeout(() => {
      setAnimationDone(true);
      setTimeout(() => stableOnComplete(), 800);
    }, totalDuration + 600);

    return () => clearTimeout(timerRef.current);
  }, [fontLoaded, duration, stableOnComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ backgroundColor: "#000" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <canvas
        ref={canvasRef}
        className="w-full max-w-3xl px-8"
        style={{ height: "200px" }}
      />

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={animationDone ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mt-4 text-base sm:text-lg tracking-[0.3em] uppercase"
        style={{ color: "rgba(255,255,255,0.35)", fontWeight: 300 }}
      >
        Creative Web Developer
      </motion.p>
    </motion.div>
  );
}

export default SignatureIntro;
