'use client';

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
} from 'react';
import { motion } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  subtitle?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'image',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  subtitle,
  scrollToExpand = "Scroll to Expand",
  textBlend = false,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobileState, setIsMobileState] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const section = sectionRef.current;
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      const isInView = rect.top <= 100 && rect.bottom >= window.innerHeight * 0.5;
      
      if (!isInView) return;

      // When scrolling up and media is expanded, collapse it
      if (mediaFullyExpanded && e.deltaY < 0) {
        e.preventDefault();
        setMediaFullyExpanded(false);
        setShowContent(false);
        setScrollProgress(0.8);
        return;
      }
      
      // When not fully expanded, handle scroll progress
      if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.003;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.5) {
          setShowContent(false);
        }
        
        // Allow normal scrolling when progress is 0 and scrolling up
        if (newProgress <= 0 && e.deltaY < 0) {
          return;
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;
      
      const section = sectionRef.current;
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      const isInView = rect.top <= 100 && rect.bottom >= window.innerHeight * 0.5;
      
      if (!isInView) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      // When scrolling up and media is expanded, collapse it
      if (mediaFullyExpanded && deltaY < -20) {
        e.preventDefault();
        setMediaFullyExpanded(false);
        setShowContent(false);
        setScrollProgress(0.8);
        setTouchStartY(touchY);
        return;
      }
      
      if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.5) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = () => {
      setTouchStartY(0);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 400 : 900);
  const mediaHeight = 300 + scrollProgress * (isMobileState ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobileState ? 100 : 80);
  const textOpacity = 1 - scrollProgress * 1.5;

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div ref={sectionRef} className="relative">
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 grayscale"
          style={{ backgroundImage: `url(${bgImageSrc})` }}
        />
        
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
          {/* Expanding Media Container */}
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-border"
            style={{
              width: `${mediaWidth}px`,
              height: `${mediaHeight}px`,
              maxWidth: '95vw',
            }}
            transition={{ type: 'tween', duration: 0.1 }}
          >
            {mediaType === 'video' ? (
              <div className="relative w-full h-full">
                <video
                  src={mediaSrc}
                  poster={posterSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover grayscale"
                />
                <motion.div
                  className="absolute inset-0 bg-background/40"
                  animate={{ opacity: 0.5 - scrollProgress * 0.4 }}
                />
              </div>
            ) : (
              <div className="relative w-full h-full">
                <img
                  src={mediaSrc}
                  alt={title || 'Media content'}
                  className="w-full h-full object-cover grayscale"
                />
                <motion.div
                  className="absolute inset-0 bg-background/50"
                  animate={{ opacity: 0.6 - scrollProgress * 0.5 }}
                />
              </div>
            )}
          </motion.div>

          {/* Animated Text */}
          <div 
            className={`flex flex-col items-center text-center mt-8 ${
              textBlend ? 'mix-blend-difference' : ''
            }`}
            style={{ opacity: Math.max(textOpacity, 0) }}
          >
            {subtitle && (
              <motion.p
                className="text-sm uppercase tracking-widest text-muted-foreground mb-4"
                style={{ transform: `translateX(-${textTranslateX}px)` }}
              >
                {subtitle}
              </motion.p>
            )}
            
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <motion.h2
                className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-foreground"
                style={{ transform: `translateX(-${textTranslateX}px)` }}
              >
                {firstWord}
              </motion.h2>
              <motion.h2
                className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-foreground"
                style={{ transform: `translateX(${textTranslateX}px)` }}
              >
                {restOfTitle}
              </motion.h2>
            </div>

            {scrollToExpand && !mediaFullyExpanded && (
              <motion.p
                className="text-sm text-muted-foreground mt-6"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {scrollToExpand}
              </motion.p>
            )}
          </div>
        </div>
      </section>

      {/* Expanded Content */}
      <motion.section
        className="w-full bg-background"
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: showContent ? 1 : 0,
          height: showContent ? 'auto' : 0
        }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.section>
    </div>
  );
};

export default ScrollExpandMedia;
