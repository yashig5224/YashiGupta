import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Code, Lightbulb, Star, Trophy } from "lucide-react";

const milestones = [
  {
    icon: Lightbulb,
    title: "Discovered Web Development",
    description:
      "Started my coding journey with HTML, CSS, and JavaScript. The magic of creating something from scratch ignited my passion.",
    date: "2022",
  },
  {
    icon: Code,
    title: "Mastered React & Modern Tools",
    description:
      "Dove deep into React ecosystem, learned state management, and embraced component-based architecture.",
    date: "2023",
  },
  {
    icon: Rocket,
    title: "Built Real-World Projects",
    description:
      "Created multiple production-ready projects, learning deployment, optimization, and user experience design.",
    date: "2023",
  },
  {
    icon: Star,
    title: "Explored AI & Automation",
    description:
      "Integrated AI tools into my workflow, learning prompt engineering and building AI-powered applications.",
    date: "2024",
  },
  {
    icon: Trophy,
    title: "Continuous Growth",
    description:
      "Currently focusing on advanced animations, performance optimization, and expanding my creative toolkit.",
    date: "Present",
  },
];

const JourneySection = () => {
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
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-muted-foreground mb-4">
            My Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6">
            The Path of <span className="text-foreground">Growth</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every step has been a learning experience. Here's how I've evolved as a developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex items-start gap-6 mb-12 ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse md:text-right"
                }`}
              >
                {/* Icon */}
                <div className="relative z-10 shrink-0">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <milestone.icon className="w-5 h-5" />
                  </motion.div>
                </div>

                {/* Content */}
                <div
                  className={`border border-border bg-card rounded-xl p-6 flex-1 ${
                    index % 2 === 0 ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"
                  } max-w-md`}
                >
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {milestone.date}
                  </span>
                  <h3 className="text-lg font-bold font-display mt-1 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
