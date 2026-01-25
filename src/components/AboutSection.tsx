import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Sparkles, Cpu, Wand2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    icon: Code2,
    title: "HTML, CSS & JavaScript",
    description: "Core web technologies for building responsive interfaces",
  },
  {
    icon: Palette,
    title: "React & Tailwind CSS",
    description: "Modern frameworks for scalable applications",
  },
  {
    icon: Sparkles,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user experiences",
  },
  {
    icon: Cpu,
    title: "AI Tools & Prompt Engineering",
    description: "Leveraging AI for enhanced development workflows",
  },
  {
    icon: Wand2,
    title: "Web Animations",
    description: "Bringing interfaces to life with motion design",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-muted-foreground mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6">
            Turning Ideas Into{" "}
            <span className="text-foreground">Digital Reality</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border border-border bg-card">
              <CardContent className="p-8">
                <div className="relative">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold font-display mb-4">
                      Hello! I'm Yashi 👋
                    </h3>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        I'm a passionate web developer with a keen eye for design and 
                        a love for creating seamless digital experiences. My journey 
                        in tech has been driven by curiosity and a desire to build 
                        things that make a difference.
                      </p>
                      <p>
                        I specialize in crafting modern, responsive websites using 
                        the latest technologies. From concept to deployment, I focus 
                        on clean code, intuitive interfaces, and delightful user 
                        experiences.
                      </p>
                      <p>
                        When I'm not coding, you'll find me exploring new AI tools, 
                        experimenting with creative projects, or learning something 
                        new to add to my skill set.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <Card className="border border-border bg-card hover:bg-secondary/50 transition-all group cursor-default">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-secondary text-foreground shrink-0 group-hover:scale-110 transition-transform">
                      <skill.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-0.5">
                        {skill.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {skill.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
