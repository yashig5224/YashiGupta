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
  const rafRef = useRef<number>();

  const stableOnComplete = useCallback(() => {
    onComplete?.();
  }, [onComplete]);

  useEffect(() => {
    const font = new FontFace(
      "Mrs Saint Delafield",
      "url(https://fonts.gstatic.com/s/mrssaintdelafield/v13/v6-IGRDKFGPZ4hv8vmNZQmADKRWyMnY.woff2)"
    );
    font.load().then((loaded) => {
      document.fonts.add(loaded);
      setFontLoaded(true);
    }).catch(() => setFontLoaded(true));
  }, []);

  useEffect(() => {
    if (!fontLoaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    const fontSize = Math.min(w * 0.13, 110);
    const text = "Yashi Gupta";

    ctx.font = `${fontSize}px "Mrs Saint Delafield", cursive`;
    const textWidth = ctx.measureText(text).width;
    const startX = (w - textWidth) / 2;
    const startY = h * 0.6;

    const totalDuration = duration * 1000;
    const startTime = performance.now();

    const underlineY = startY + fontSize * 0.12;
    const underlineStartX = startX - 20;
    const underlineEndX = startX + textWidth + 30;

    function draw(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / totalDuration, 1);
      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      ctx!.clearRect(0, 0, w, h);

      // Progressive reveal via clipping
      const revealX = startX + textWidth * eased;

      ctx!.save();
      ctx!.beginPath();
      ctx!.rect(0, 0, revealX + 2, h);
      ctx!.clip();

      // Draw text as stroke (outline only, like pen writing)
      ctx!.font = `${fontSize}px "Mrs Saint Delafield", cursive`;
      ctx!.strokeStyle = "#ffffff";
      ctx!.lineWidth = 1.3;
      ctx!.lineCap = "round";
      ctx!.lineJoin = "round";
      ctx!.strokeText(text, startX, startY);

      // Also fill with very subtle opacity for body
      ctx!.fillStyle = "rgba(255,255,255,0.15)";
      ctx!.fillText(text, startX, startY);

      ctx!.restore();

      // Underline flourish (starts at 75%)
      if (progress > 0.75) {
        const uProgress = Math.min((progress - 0.75) / 0.25, 1);
        const uEased = 1 - Math.pow(1 - uProgress, 3);
        const uCurrentX = underlineStartX + (underlineEndX - underlineStartX) * uEased;

        ctx!.save();
        ctx!.globalAlpha = 0.25;
        ctx!.strokeStyle = "#ffffff";
        ctx!.lineWidth = 0.7;
        ctx!.lineCap = "round";
        ctx!.beginPath();
        ctx!.moveTo(underlineStartX, underlineY);

        const cpX = (underlineStartX + uCurrentX) / 2;
        const cpY = underlineY + 18;
        ctx!.quadraticCurveTo(cpX, cpY, uCurrentX, underlineY - 8);
        ctx!.stroke();
        ctx!.restore();
      }

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(draw);
      }
    }

    rafRef.current = requestAnimationFrame(draw);

    timerRef.current = setTimeout(() => {
      setAnimationDone(true);
      setTimeout(() => stableOnComplete(), 800);
    }, totalDuration + 600);

    return () => {
      clearTimeout(timerRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
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
        style={{ width: "min(90vw, 800px)", height: "220px" }}
      />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={animationDone ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mt-2 text-base sm:text-lg tracking-[0.3em] uppercase"
        style={{ color: "rgba(255,255,255,0.35)", fontWeight: 300 }}
      >
        Creative Web Developer
      </motion.p>
    </motion.div>
  );
}

export default SignatureIntro;
