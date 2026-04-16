"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface SignatureIntroProps {
  onComplete?: () => void;
  duration?: number;
}

export function SignatureIntro({ onComplete, duration = 3 }: SignatureIntroProps) {
  const [animationDone, setAnimationDone] = useState(false);
  const textRef = useRef<SVGTextElement>(null);
  const underlineRef = useRef<SVGPathElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    // Load the font first, then measure
    const font = new FontFace(
      "Dancing Script",
      "url(https://fonts.gstatic.com/s/dancingscript/v25/If2RXTr6YS-zF4S-kcSWSVi_szLgiuE.woff2)"
    );
    font.load().then((loaded) => {
      document.fonts.add(loaded);

      // Force re-render after font loads
      if (textRef.current) {
        const length = textRef.current.getComputedTextLength() * 3;
        textRef.current.style.strokeDasharray = `${length}`;
        textRef.current.style.strokeDashoffset = `${length}`;
        textRef.current.style.animation = `drawSig ${duration}s cubic-bezier(0.42, 0, 0.58, 1) forwards`;
      }
      if (underlineRef.current) {
        const uLen = underlineRef.current.getTotalLength();
        underlineRef.current.style.strokeDasharray = `${uLen}`;
        underlineRef.current.style.strokeDashoffset = `${uLen}`;
        underlineRef.current.style.animation = `drawSig ${duration * 0.35}s ease-out ${duration * 0.8}s forwards`;
      }
    });

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
          viewBox="0 0 700 200"
          className="w-full h-auto overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            ref={textRef}
            x="350"
            y="130"
            textAnchor="middle"
            fontFamily="'Dancing Script', cursive"
            fontSize="120"
            fontWeight="700"
            fill="none"
            stroke="#fff"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            Yashi Gupta
          </text>

          {/* Sweeping underline */}
          <path
            ref={underlineRef}
            d="M 80 165 Q 250 190, 400 192 Q 550 190, 650 170"
            fill="none"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="0.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

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

      <style>{`
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
