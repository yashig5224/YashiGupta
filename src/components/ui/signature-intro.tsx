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
          viewBox="0 0 800 220"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* "Y" - sweeping diagonal strokes */}
          <path
            d="M28 38 Q38 58, 52 82 Q56 90, 58 96"
            className="signature-path"
            style={{ animationDelay: "0s", animationDuration: `${duration * 0.09}s` }}
          />
          <path
            d="M82 36 Q72 56, 58 82 Q56 96, 54 120 Q52 140, 56 158"
            className="signature-path"
            style={{ animationDelay: `${duration * 0.07}s`, animationDuration: `${duration * 0.1}s` }}
          />

          {/* "a" - looping cursive a */}
          <path
            d="M90 108 Q88 82, 112 76 Q136 72, 144 88 Q150 100, 136 110 Q120 120, 104 112 Q92 104, 108 88 Q118 76, 148 82 Q156 86, 154 108 Q152 118, 158 112"
            className="signature-path"
            style={{ animationDelay: `${duration * 0.15}s`, animationDuration: `${duration * 0.12}s` }}
          />

          {/* "s" - fluid s curve */}
          <path
            d="M170 78 Q186 68, 198 74 Q208 80, 194 90 Q180 100, 172 96 Q166 100, 176 108 Q188 116, 204 108"
            className="signature-path"
            style={{ animationDelay: `${duration * 0.26}s`, animationDuration: `${duration * 0.08}s` }}
          />

          {/* "h" - tall stem with looping arch */}
          <path
            d="M216 42 Q214 62, 218 82 Q220 96, 220 112"
            className="signature-path"
            style={{ animationDelay: `${duration * 0.33}s`, animationDuration: `${duration * 0.06}s` }}
          />
          <path
            d="M220 82 Q228 68, 248 70 Q264 74, 262 90 Q260 102, 262 114"
            className="signature-path"
            style={{ animationDelay: `${duration * 0.38}s`, animationDuration: `${duration * 0.07}s` }}
          />

          {/* "i" - short stroke with dot */}
          <path
            d="M278 80 Q276 92, 278 106 Q279 112, 282 114"
            className="signature-path"
            style={{ animationDelay: `${duration * 0.44}s`, animationDuration: `${duration * 0.04}s` }}
          />
          <circle
            cx="280"
            cy="66"
            r="2.5"
            fill="#fff"
            className="signature-dot"
            style={{ animationDelay: `${duration * 0.48}s` }}
          />

          {/* Connecting flourish — sweeping curve to last name */}
          <path
            d="M284 114 Q300 132, 320 128 Q345 120, 360 82 Q368 62, 380 56"
            className="signature-path"
            style={{ animationDelay: `${duration * 0.48}s`, animationDuration: `${duration * 0.09}s` }}
          />

          {/* "G" - expressive capital G with curl */}
          <path
            d="M398 48 Q370 42, 352 60 Q340 78, 346 100 Q354 124, 384 126 Q408 124, 412 104 Q414 92, 404 88 L382 88"
            className="signature-path"
            style={{ animationDelay: `${duration * 0.56}s`, animationDuration: `${duration * 0.11}s` }}
          />

          {/* "u" - smooth valley */}
          <path
            d="M424 80 Q420 98, 428 110 Q438 118, 450 108 Q460 96, 458 80 Q458 92, 460 108 Q462 116, 466 112"
            className="signature-path"
            style={{ animationDelay: `${duration * 0.66}s`, animationDuration: `${duration * 0.08}s` }}
          />

          {/* "p" - descending stroke with bowl */}
          <path
            d="M478 78 Q476 108, 478 140 Q480 156, 480 166"
            className="signature-path"
            style={{ animationDelay: `${duration * 0.74}s`, animationDuration: `${duration * 0.05}s` }}
          />
          <path
            d="M478 82 Q486 66, 510 68 Q528 72, 524 90 Q518 108, 498 110 Q484 108, 480 96"
            className="signature-path"
            style={{ animationDelay: `${duration * 0.78}s`, animationDuration: `${duration * 0.08}s` }}
          />

          {/* "t" - crossed stroke */}
          <path
            d="M544 54 Q542 74, 544 94 Q546 108, 548 114 Q552 120, 564 114"
            className="signature-path"
            style={{ animationDelay: `${duration * 0.85}s`, animationDuration: `${duration * 0.05}s` }}
          />
          <path
            d="M530 76 Q544 72, 562 76"
            className="signature-path"
            style={{ animationDelay: `${duration * 0.9}s`, animationDuration: `${duration * 0.03}s` }}
          />

          {/* "a" final - looping finish */}
          <path
            d="M578 84 Q576 66, 600 62 Q622 60, 624 80 Q626 96, 610 106 Q594 112, 582 102 Q574 92, 590 80 Q604 72, 624 82 Q632 90, 630 108 Q628 118, 636 114"
            className="signature-path"
            style={{ animationDelay: `${duration * 0.92}s`, animationDuration: `${duration * 0.08}s` }}
          />

          {/* Final flourish underline — long sweeping curve */}
          <path
            d="M36 148 Q120 162, 280 168 Q440 170, 580 154 Q620 148, 640 140"
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
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawSignature forwards ease-in-out;
        }

        .signature-underline {
          stroke-width: 1.2;
          opacity: 0.5;
        }

        .signature-dot {
          opacity: 0;
          animation: dotAppear 0.3s forwards ease-out;
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
