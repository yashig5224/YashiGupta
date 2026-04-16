"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface SignatureIntroProps {
  onComplete?: () => void;
  duration?: number;
}

export function SignatureIntro({ onComplete, duration = 3.2 }: SignatureIntroProps) {
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
      <div className="relative w-full max-w-4xl px-6">
        <svg
          viewBox="0 0 900 280"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ===== "Y" — Capital calligraphic Y with entry flourish ===== */}
          {/* Entry flourish loop */}
          <path
            d="M20 120 Q10 100, 30 80 Q50 60, 60 50 Q70 44, 65 52"
            className="sig-thin"
            style={{ animationDelay: "0s", animationDuration: `${duration * 0.06}s` }}
          />
          {/* Left diagonal — thick downstroke */}
          <path
            d="M65 52 Q58 68, 52 80 Q42 100, 55 108"
            className="sig-thick"
            style={{ animationDelay: `${duration * 0.05}s`, animationDuration: `${duration * 0.06}s` }}
          />
          {/* Right diagonal — thin hairline */}
          <path
            d="M95 38 Q88 52, 78 70 Q68 88, 55 108"
            className="sig-thin"
            style={{ animationDelay: `${duration * 0.1}s`, animationDuration: `${duration * 0.06}s` }}
          />
          {/* Descender — thick flowing tail */}
          <path
            d="M55 108 Q50 130, 48 150 Q44 172, 52 180 Q60 186, 72 176 Q80 168, 85 155"
            className="sig-thick"
            style={{ animationDelay: `${duration * 0.15}s`, animationDuration: `${duration * 0.07}s` }}
          />

          {/* ===== "a" — connected cursive a ===== */}
          <path
            d="M85 155 Q90 140, 100 128 Q108 118, 120 116 Q136 114, 142 122 Q148 132, 138 140 Q126 146, 112 140 Q104 136, 110 126 Q116 118, 142 122 Q152 128, 156 138 Q160 144, 162 140"
            className="sig-medium"
            style={{ animationDelay: `${duration * 0.21}s`, animationDuration: `${duration * 0.1}s` }}
          />

          {/* ===== "s" — flowing cursive s ===== */}
          <path
            d="M162 140 Q168 128, 180 120 Q192 114, 200 120 Q208 128, 196 136 Q184 144, 174 140 Q168 142, 174 150 Q182 158, 198 154 Q206 150, 212 142"
            className="sig-medium"
            style={{ animationDelay: `${duration * 0.3}s`, animationDuration: `${duration * 0.08}s` }}
          />

          {/* ===== "h" — looped ascender h ===== */}
          {/* Ascender loop */}
          <path
            d="M212 142 Q216 130, 222 110 Q226 88, 232 72 Q236 58, 244 54 Q252 52, 250 62 Q248 74, 240 90 Q234 104, 232 120"
            className="sig-medium"
            style={{ animationDelay: `${duration * 0.37}s`, animationDuration: `${duration * 0.07}s` }}
          />
          {/* Arch and downstroke */}
          <path
            d="M232 120 Q236 112, 248 108 Q262 106, 270 114 Q278 124, 274 138 Q272 146, 278 142"
            className="sig-thick"
            style={{ animationDelay: `${duration * 0.43}s`, animationDuration: `${duration * 0.06}s` }}
          />

          {/* ===== "i" — with elegant dot ===== */}
          <path
            d="M278 142 Q282 130, 288 120 Q292 112, 296 118 Q300 128, 298 142 Q296 150, 304 144"
            className="sig-medium"
            style={{ animationDelay: `${duration * 0.48}s`, animationDuration: `${duration * 0.04}s` }}
          />
          {/* Dot — small teardrop */}
          <path
            d="M294 100 Q296 96, 298 100 Q296 104, 294 100"
            className="sig-dot"
            style={{ animationDelay: `${duration * 0.52}s` }}
          />

          {/* ===== Connecting flourish — sweeping bridge to G ===== */}
          <path
            d="M304 144 Q320 160, 340 164 Q370 168, 400 148 Q420 132, 440 108 Q450 94, 460 82"
            className="sig-thin"
            style={{ animationDelay: `${duration * 0.52}s`, animationDuration: `${duration * 0.08}s` }}
          />

          {/* ===== "G" — Grand calligraphic G with swash ===== */}
          {/* Upper swash */}
          <path
            d="M460 82 Q470 60, 490 48 Q510 38, 520 42 Q530 48, 520 58"
            className="sig-thin"
            style={{ animationDelay: `${duration * 0.59}s`, animationDuration: `${duration * 0.04}s` }}
          />
          {/* Main G body */}
          <path
            d="M520 58 Q500 54, 478 66 Q458 82, 456 106 Q454 130, 470 146 Q488 160, 512 156 Q530 150, 536 136 Q540 124, 530 120 L510 120"
            className="sig-thick"
            style={{ animationDelay: `${duration * 0.62}s`, animationDuration: `${duration * 0.1}s` }}
          />

          {/* ===== "u" — flowing u ===== */}
          <path
            d="M530 120 Q536 112, 542 118 Q546 128, 544 140 Q540 154, 552 158 Q564 160, 572 148 Q578 136, 576 120 Q576 130, 580 146 Q582 154, 588 148"
            className="sig-medium"
            style={{ animationDelay: `${duration * 0.71}s`, animationDuration: `${duration * 0.07}s` }}
          />

          {/* ===== "p" — descending p with bowl ===== */}
          {/* Descender */}
          <path
            d="M588 148 Q592 136, 596 120 Q600 140, 598 164 Q596 188, 592 206 Q588 218, 580 222 Q572 224, 570 216"
            className="sig-thick"
            style={{ animationDelay: `${duration * 0.77}s`, animationDuration: `${duration * 0.06}s` }}
          />
          {/* Bowl */}
          <path
            d="M596 120 Q604 108, 620 106 Q638 106, 642 118 Q646 132, 634 142 Q620 150, 604 146 Q596 142, 596 132"
            className="sig-medium"
            style={{ animationDelay: `${duration * 0.82}s`, animationDuration: `${duration * 0.06}s` }}
          />

          {/* ===== "t" — crossed t ===== */}
          <path
            d="M648 90 Q650 108, 652 126 Q654 142, 658 150 Q662 158, 672 152 Q678 146, 680 140"
            className="sig-medium"
            style={{ animationDelay: `${duration * 0.87}s`, animationDuration: `${duration * 0.04}s` }}
          />
          {/* Crossbar */}
          <path
            d="M638 118 Q652 114, 668 118"
            className="sig-thin"
            style={{ animationDelay: `${duration * 0.91}s`, animationDuration: `${duration * 0.02}s` }}
          />

          {/* ===== "a" final — with exit flourish ===== */}
          <path
            d="M680 140 Q686 126, 696 118 Q710 110, 722 114 Q734 120, 732 132 Q728 142, 716 146 Q702 148, 694 140 Q690 134, 700 124 Q712 116, 734 124 Q744 130, 742 144 Q740 154, 748 150"
            className="sig-medium"
            style={{ animationDelay: `${duration * 0.92}s`, animationDuration: `${duration * 0.06}s` }}
          />
          {/* Exit flourish */}
          <path
            d="M748 150 Q760 140, 774 128 Q790 114, 800 100 Q808 88, 812 78"
            className="sig-thin"
            style={{ animationDelay: `${duration * 0.97}s`, animationDuration: `${duration * 0.03}s` }}
          />

          {/* ===== Decorative underline flourish ===== */}
          <path
            d="M30 190 Q100 210, 250 218 Q420 226, 600 212 Q720 200, 780 180 Q800 172, 810 162"
            className="sig-flourish"
            style={{ animationDelay: `${duration * 1.0}s`, animationDuration: `${duration * 0.1}s` }}
          />
          {/* Secondary thin flourish */}
          <path
            d="M580 222 Q520 240, 400 246 Q280 248, 180 236 Q120 228, 80 216"
            className="sig-flourish-secondary"
            style={{ animationDelay: `${duration * 1.08}s`, animationDuration: `${duration * 0.08}s` }}
          />
        </svg>
      </div>

      {/* Subtitle fade in */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={animationDone ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mt-4 text-base sm:text-lg tracking-[0.3em] uppercase"
        style={{ color: "rgba(255,255,255,0.4)", fontWeight: 300 }}
      >
        Creative Web Developer
      </motion.p>

      <style>{`
        .sig-thick,
        .sig-medium,
        .sig-thin,
        .sig-flourish,
        .sig-flourish-secondary {
          fill: none;
          stroke: #fff;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 1200;
          stroke-dashoffset: 1200;
          animation: drawSig forwards cubic-bezier(0.4, 0, 0.2, 1);
        }

        .sig-thick {
          stroke-width: 3.2;
        }

        .sig-medium {
          stroke-width: 2.2;
        }

        .sig-thin {
          stroke-width: 1.2;
          opacity: 0.85;
        }

        .sig-flourish {
          stroke-width: 1.4;
          opacity: 0.45;
        }

        .sig-flourish-secondary {
          stroke-width: 0.8;
          opacity: 0.25;
        }

        .sig-dot {
          fill: none;
          stroke: #fff;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-dasharray: 50;
          stroke-dashoffset: 50;
          animation: drawSig 0.3s forwards ease-out;
        }

        @keyframes drawSig {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </motion.div>
  );
}

export default SignatureIntro;
