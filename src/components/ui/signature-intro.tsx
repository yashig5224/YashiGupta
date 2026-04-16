"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface SignatureIntroProps {
  onComplete?: () => void;
  duration?: number;
}

export function SignatureIntro({ onComplete, duration = 3 }: SignatureIntroProps) {
  const [animationDone, setAnimationDone] = useState(false);
  const pathRef = useRef<SVGPathElement>(null);
  const underlineRef = useRef<SVGPathElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const path = pathRef.current;
    const underline = underlineRef.current;
    if (path) {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      path.style.animation = `drawSignature ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1) forwards`;
    }
    if (underline) {
      const uLength = underline.getTotalLength();
      underline.style.strokeDasharray = `${uLength}`;
      underline.style.strokeDashoffset = `${uLength}`;
      underline.style.animation = `drawSignature ${duration * 0.4}s cubic-bezier(0.25, 0.1, 0.25, 1) ${duration * 0.85}s forwards`;
    }

    timerRef.current = setTimeout(() => {
      setAnimationDone(true);
      setTimeout(() => onComplete?.(), 800);
    }, duration * 1000 + 800);

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
          viewBox="0 0 800 300"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main signature path - "Yashi Gupta" in flowing cursive */}
          <path
            ref={pathRef}
            d={`
              M 80 60
              Q 70 55, 75 70
              Q 80 90, 95 130
              Q 100 145, 105 155
              Q 108 160, 110 155
              Q 130 100, 145 70
              Q 155 50, 160 45
              Q 165 42, 162 50
              Q 155 70, 148 95
              Q 140 125, 135 155
              Q 132 170, 135 185
              Q 138 195, 150 185
              Q 165 170, 175 150

              Q 180 140, 178 155
              Q 175 175, 182 180
              Q 190 182, 198 170
              Q 205 158, 200 148
              Q 195 140, 185 145
              Q 178 150, 178 155

              Q 198 170, 210 160
              Q 218 152, 222 142
              Q 228 128, 235 120
              Q 242 112, 248 118
              Q 252 126, 248 138
              Q 242 152, 232 158
              Q 222 162, 218 155
              Q 215 148, 222 142

              Q 248 138, 260 145
              Q 265 148, 268 142
              Q 274 128, 278 115
              Q 282 100, 286 90
              Q 290 82, 292 78
              Q 294 76, 292 82
              Q 288 96, 282 115
              Q 278 130, 276 145
              Q 275 158, 278 165
              Q 282 170, 290 162
              Q 300 150, 306 138
              Q 310 130, 315 125
              Q 322 120, 326 128
              Q 330 138, 324 148
              Q 316 158, 306 155
              Q 300 150, 306 138

              Q 326 128, 338 138
              Q 342 142, 340 148
              Q 336 156, 330 160
              Q 324 164, 322 158
              Q 320 152, 328 148
              Q 340 148, 345 155
              Q 350 162, 358 158
              Q 365 152, 370 140

              Q 375 125, 390 110
              Q 410 85, 430 75
              Q 445 68, 455 72
              Q 462 78, 458 90
              Q 450 105, 435 115

              Q 450 105, 465 100
              Q 485 92, 498 88
              Q 508 86, 515 92
              Q 520 100, 512 115
              Q 502 132, 488 145
              Q 475 158, 468 162
              Q 460 165, 465 158
              Q 475 145, 498 135
              Q 515 128, 520 132
              Q 525 138, 518 148
              Q 510 160, 498 168
              Q 488 174, 480 170
              Q 476 165, 482 158

              Q 520 132, 540 140
              Q 548 144, 548 152
              Q 548 162, 540 170
              Q 530 178, 522 175
              Q 518 170, 525 162
              Q 535 155, 548 152

              Q 555 148, 565 138
              Q 572 125, 575 115
              Q 578 105, 575 98
              Q 572 92, 568 100
              Q 562 115, 565 135
              Q 568 155, 580 162
              Q 590 168, 600 158
              Q 608 148, 608 138
              Q 608 130, 600 135
              Q 592 142, 595 155
              Q 598 168, 612 172
              Q 625 174, 635 162
              Q 642 152, 640 140
              Q 638 132, 628 138
              Q 620 148, 625 162

              Q 635 162, 648 155
              Q 658 148, 665 135
              Q 670 125, 668 118
              Q 665 112, 658 118
              Q 650 128, 650 145
              Q 650 160, 662 168
              Q 672 172, 682 162
              Q 690 150, 690 138

              Q 690 150, 700 140
              Q 710 128, 718 120
              Q 722 116, 720 122
            `}
            fill="none"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Underline flourish */}
          <path
            ref={underlineRef}
            d={`
              M 60 210
              Q 200 230, 400 235
              Q 550 232, 700 210
              Q 740 202, 750 195
            `}
            fill="none"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Subtitle fade in */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={animationDone ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mt-2 text-base sm:text-lg tracking-[0.3em] uppercase"
        style={{ color: "rgba(255,255,255,0.35)", fontWeight: 300 }}
      >
        Creative Web Developer
      </motion.p>

      <style>{`
        @keyframes drawSignature {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </motion.div>
  );
}

export default SignatureIntro;
