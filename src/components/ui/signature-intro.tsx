"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface SignatureIntroProps {
  onComplete?: () => void;
  duration?: number;
}

export function SignatureIntro({ onComplete, duration = 2.8 }: SignatureIntroProps) {
  const [animationDone, setAnimationDone] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setAnimationDone(true);
      setTimeout(() => onComplete?.(), 800);
    }, duration * 1000 + 600);

    return () => clearTimeout(timerRef.current);
  }, [duration, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ backgroundColor: "#000" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative w-full max-w-3xl px-8">
        <svg
          viewBox="0 0 800 200"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* "Y" */}
          <path
            d="M30 40 L55 100 L55 160"
            className="signature-path"
            style={{ animationDelay: "0s", animationDuration: `${duration * 0.1}s` }}
          />
          <path
            d="M80 40 L55 100"
            className="signature-path"
            style={{ animationDelay: `${duration * 0.08}s`, animationDuration: `${duration * 0.06}s` }}
          />

          {/* "a" */}
          <path
            d="M110 80 C110 60, 145 55, 148 80 C150 100, 115 115, 110 95 C108 85, 148 80, 150 105 C151 115, 155 120, 155 110"
            className="signature-path"
            style={{ animationDelay: `${duration * 0.14}s`, animationDuration: `${duration * 0.1}s` }}
          />

          {/* "s" */}
          <path
            d="M175 75 C185 65, 205 68, 195 80 C185 90, 170 88, 172 98 C174 110, 205 112, 205 100"
            className="signature-path"
            style={{ animationDelay: `${duration * 0.24}s`, animationDuration: `${duration * 0.08}s` }}
          />

          {/* "h" */}
          <path
            d="M220 40 L220 110"
            className="signature-path"
            style={{ animationDelay: `${duration * 0.32}s`, animationDuration: `${duration * 0.05}s` }}
          />
          <path
            d="M220 80 C225 65, 260 65, 260 85 L260 110"
            className="signature-path"
            style={{ animationDelay: `${duration * 0.37}s`, animationDuration: `${duration * 0.07}s` }}
          />

          {/* "i" */}
          <path
            d="M280 78 L280 110"
            className="signature-path"
            style={{ animationDelay: `${duration * 0.44}s`, animationDuration: `${duration * 0.04}s` }}
          />
          <circle
            cx="280"
            cy="65"
            r="3"
            fill="#fff"
            className="signature-dot"
            style={{ animationDelay: `${duration * 0.48}s` }}
          />

          {/* Connecting flourish from first to last name */}
          <path
            d="M290 110 C310 130, 340 130, 370 60"
            className="signature-path"
            style={{ animationDelay: `${duration * 0.48}s`, animationDuration: `${duration * 0.08}s` }}
          />

          {/* "G" */}
          <path
            d="M395 50 C350 45, 340 70, 345 95 C350 125, 395 130, 405 105 L405 85 L380 85"
            className="signature-path"
            style={{ animationDelay: `${duration * 0.56}s`, animationDuration: `${duration * 0.1}s` }}
          />

          {/* "u" */}
          <path
            d="M425 78 C425 78, 420 105, 435 110 C450 115, 460 95, 460 78 L460 110"
            className="signature-path"
            style={{ animationDelay: `${duration * 0.66}s`, animationDuration: `${duration * 0.08}s` }}
          />

          {/* "p" */}
          <path
            d="M480 78 L480 160"
            className="signature-path"
            style={{ animationDelay: `${duration * 0.74}s`, animationDuration: `${duration * 0.04}s` }}
          />
          <path
            d="M480 80 C485 65, 520 65, 520 85 C520 105, 485 110, 480 95"
            className="signature-path"
            style={{ animationDelay: `${duration * 0.78}s`, animationDuration: `${duration * 0.07}s` }}
          />

          {/* "t" */}
          <path
            d="M545 55 L545 110 C545 118, 560 118, 565 110"
            className="signature-path"
            style={{ animationDelay: `${duration * 0.85}s`, animationDuration: `${duration * 0.05}s` }}
          />
          <path
            d="M530 75 L560 75"
            className="signature-path"
            style={{ animationDelay: `${duration * 0.9}s`, animationDuration: `${duration * 0.03}s` }}
          />

          {/* "a" final */}
          <path
            d="M580 80 C580 60, 615 55, 618 80 C620 100, 585 115, 580 95 C578 85, 618 80, 620 105 C621 115, 625 120, 625 110"
            className="signature-path"
            style={{ animationDelay: `${duration * 0.93}s`, animationDuration: `${duration * 0.07}s` }}
          />

          {/* Final flourish underline */}
          <path
            d="M40 140 C150 155, 400 160, 620 135"
            className="signature-path signature-underline"
            style={{ animationDelay: `${duration * 1.0}s`, animationDuration: `${duration * 0.12}s` }}
          />
        </svg>
      </div>

      {/* Subtitle fade in */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={animationDone ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mt-6 text-lg sm:text-xl tracking-widest uppercase"
        style={{ color: "rgba(255,255,255,0.5)" }}
      >
        Creative Web Developer
      </motion.p>

      <style>{`
        .signature-path {
          fill: none;
          stroke: #fff;
          stroke-width: 2.5;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawSignature forwards ease-in-out;
        }

        .signature-underline {
          stroke-width: 1.5;
          opacity: 0.6;
        }

        .signature-dot {
          opacity: 0;
          animation: dotAppear 0.2s forwards ease-out;
        }

        @keyframes drawSignature {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes dotAppear {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </motion.div>
  );
}

export default SignatureIntro;
