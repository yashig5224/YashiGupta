import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "FrostyDelight",
    description:
      "A visually stunning ice cream landing page with smooth animations and delightful micro-interactions.",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&h=400&fit=crop",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    color: "from-pink-500/20 to-orange-500/20",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Brew & Botanica",
    description:
      "A sophisticated brand website for an artisanal coffee and plant shop, featuring elegant typography and immersive imagery.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop",
    tags: ["React", "SCSS", "GSAP"],
    color: "from-green-500/20 to-emerald-500/20",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Netflix Clone",
    description:
      "A pixel-perfect recreation of Netflix's interface with dynamic content loading and responsive design.",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&h=400&fit=crop",
    tags: ["React", "Firebase", "TMDB API"],
    color: "from-red-500/20 to-rose-500/20",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Student Planner",
    description:
      "A comprehensive web app for students to manage tasks, schedules, and academic goals with an intuitive interface.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    tags: ["React", "TypeScript", "LocalStorage"],
    color: "from-blue-500/20 to-cyan-500/20",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "AI Creative Projects",
    description:
      "A collection of AI-powered creative tools and experiments, showcasing the intersection of art and technology.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tags: ["AI/ML", "Python", "React"],
    color: "from-purple-500/20 to-violet-500/20",
    demoUrl: "#",
    codeUrl: "#",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="glass border-border/50 overflow-hidden group h-full">
        <div className={`relative overflow-hidden bg-gradient-to-br ${project.color}`}>
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Overlay buttons */}
          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
            <Button
              size="sm"
              className="bg-primary/90 backdrop-blur-sm"
              asChild
            >
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </a>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="backdrop-blur-sm bg-background/50"
              asChild
            >
              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          </div>
        </div>

        <CardContent className="p-6">
          <h3 className="text-xl font-bold font-display mb-2 group-hover:text-gradient transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-secondary/50 text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-muted-foreground mb-4">
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills in web development,
            design, and creative problem-solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
