import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";

const skillSlugs = [
  "html5",
  "css3",
  "javascript",
  "typescript",
  "react",
  "tailwindcss",
  "nodedotjs",
  "figma",
  "git",
  "github",
  "visualstudiocode",
  "framer",
  "vercel",
  "vite",
  "npm",
  "sass",
  "firebase",
  "openai",
  "python",
  "adobephotoshop",
  "adobeillustrator",
  "notion",
  "slack",
  "discord",
  "canva",
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journey" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-border" />

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-muted-foreground mb-4">
            My Skills
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6">
            Technologies I <span className="text-foreground">Work With</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            An interactive showcase of the tools, frameworks, and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative aspect-square max-h-[500px] mx-auto">
            <IconCloud iconSlugs={skillSlugs} />
          </div>
          
          {/* Skill categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            {[
              { label: "Frontend", items: "React, TypeScript, Tailwind" },
              { label: "Tools", items: "Git, VS Code, Figma" },
              { label: "Backend", items: "Node.js, Firebase, APIs" },
              { label: "AI/Creative", items: "OpenAI, Canva, Notion" },
            ].map((category, index) => (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="p-4 rounded-xl border border-border bg-card text-center"
              >
                <h3 className="font-semibold text-foreground mb-1">
                  {category.label}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {category.items}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
