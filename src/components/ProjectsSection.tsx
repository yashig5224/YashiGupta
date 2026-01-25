import { Timeline } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projectsData = [
    {
      title: "FrostyDelight",
      content: (
        <div>
          <p className="text-foreground text-sm md:text-base font-semibold mb-4">
            Ice Cream Landing Page
          </p>
          <p className="text-muted-foreground text-sm md:text-base mb-4">
            A visually stunning ice cream landing page with smooth animations and delightful micro-interactions. 
            Built with a focus on user experience and modern design principles.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary" className="text-xs">React</Badge>
            <Badge variant="secondary" className="text-xs">Tailwind CSS</Badge>
            <Badge variant="secondary" className="text-xs">Framer Motion</Badge>
          </div>
          <div className="flex gap-3 mb-8">
            <Button size="sm" variant="outline" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </a>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=500&h=300&fit=crop"
              alt="FrostyDelight project"
              className="rounded-lg object-cover h-32 md:h-48 w-full border border-border grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=500&h=300&fit=crop"
              alt="FrostyDelight detail"
              className="rounded-lg object-cover h-32 md:h-48 w-full border border-border grayscale hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Brew & Botanica",
      content: (
        <div>
          <p className="text-foreground text-sm md:text-base font-semibold mb-4">
            Artisanal Coffee & Plant Shop
          </p>
          <p className="text-muted-foreground text-sm md:text-base mb-4">
            A sophisticated brand website for an artisanal coffee and plant shop, featuring elegant typography 
            and immersive imagery. Designed to evoke warmth and natural beauty.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary" className="text-xs">React</Badge>
            <Badge variant="secondary" className="text-xs">SCSS</Badge>
            <Badge variant="secondary" className="text-xs">GSAP</Badge>
          </div>
          <div className="flex gap-3 mb-8">
            <Button size="sm" variant="outline" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </a>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=300&fit=crop"
              alt="Brew & Botanica project"
              className="rounded-lg object-cover h-32 md:h-48 w-full border border-border grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=500&h=300&fit=crop"
              alt="Brew & Botanica detail"
              className="rounded-lg object-cover h-32 md:h-48 w-full border border-border grayscale hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Netflix Clone",
      content: (
        <div>
          <p className="text-foreground text-sm md:text-base font-semibold mb-4">
            Streaming Platform UI Recreation
          </p>
          <p className="text-muted-foreground text-sm md:text-base mb-4">
            A pixel-perfect recreation of Netflix's interface with dynamic content loading, 
            responsive design, and smooth animations. Features real API integration for movie data.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary" className="text-xs">React</Badge>
            <Badge variant="secondary" className="text-xs">Firebase</Badge>
            <Badge variant="secondary" className="text-xs">TMDB API</Badge>
          </div>
          <div className="flex gap-3 mb-8">
            <Button size="sm" variant="outline" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </a>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&h=300&fit=crop"
              alt="Netflix Clone project"
              className="rounded-lg object-cover h-32 md:h-48 w-full border border-border grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=500&h=300&fit=crop"
              alt="Netflix Clone detail"
              className="rounded-lg object-cover h-32 md:h-48 w-full border border-border grayscale hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Student Planner",
      content: (
        <div>
          <p className="text-foreground text-sm md:text-base font-semibold mb-4">
            Academic Task Management App
          </p>
          <p className="text-muted-foreground text-sm md:text-base mb-4">
            A comprehensive web app for students to manage tasks, schedules, and academic goals. 
            Features an intuitive interface with calendar integration and progress tracking.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary" className="text-xs">React</Badge>
            <Badge variant="secondary" className="text-xs">TypeScript</Badge>
            <Badge variant="secondary" className="text-xs">LocalStorage</Badge>
          </div>
          <div className="flex gap-3 mb-8">
            <Button size="sm" variant="outline" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </a>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop"
              alt="Student Planner project"
              className="rounded-lg object-cover h-32 md:h-48 w-full border border-border grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=500&h=300&fit=crop"
              alt="Student Planner detail"
              className="rounded-lg object-cover h-32 md:h-48 w-full border border-border grayscale hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      ),
    },
    {
      title: "AI Projects",
      content: (
        <div>
          <p className="text-foreground text-sm md:text-base font-semibold mb-4">
            Creative AI Experiments
          </p>
          <p className="text-muted-foreground text-sm md:text-base mb-4">
            A collection of AI-powered creative tools and experiments, showcasing the 
            intersection of art and technology. Includes generative art and intelligent assistants.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary" className="text-xs">AI/ML</Badge>
            <Badge variant="secondary" className="text-xs">Python</Badge>
            <Badge variant="secondary" className="text-xs">React</Badge>
          </div>
          <div className="mb-6">
            <p className="text-foreground font-medium mb-3">Highlights:</p>
            <ul className="text-muted-foreground text-sm space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-foreground">✓</span> AI Image Generator
              </li>
              <li className="flex items-center gap-2">
                <span className="text-foreground">✓</span> Smart Content Assistant
              </li>
              <li className="flex items-center gap-2">
                <span className="text-foreground">✓</span> Prompt Engineering Tools
              </li>
              <li className="flex items-center gap-2">
                <span className="text-foreground">✓</span> Creative Automation Scripts
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop"
              alt="AI Projects"
              className="rounded-lg object-cover h-32 md:h-48 w-full border border-border grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="https://images.unsplash.com/photo-1676299081847-824916de030a?w=500&h=300&fit=crop"
              alt="AI Projects detail"
              className="rounded-lg object-cover h-32 md:h-48 w-full border border-border grayscale hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="projects" className="relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-border" />
      <Timeline
        data={projectsData}
        heading="Featured Projects"
        subheading="A timeline of my best work showcasing skills in web development, design, and creative problem-solving."
      />
    </section>
  );
};

export default ProjectsSection;
