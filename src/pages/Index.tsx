import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntroAnimation from "@/components/IntroAnimation";
import Navbar from "@/components/Navbar";
import { ParticleHero } from "@/components/ui/particle-effect-hero";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import JourneySection from "@/components/JourneySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setShowIntro(false);
      setShowContent(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <AnimatePresence mode="wait">
        {showIntro && (
          <motion.div
            key="intro"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <IntroAnimation onComplete={handleIntroComplete} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showContent && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Navbar />
            <main>
              <section id="home">
                <ParticleHero />
              </section>
              <AboutSection />
              <ProjectsSection />
              <JourneySection />
              <ContactSection />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
