import { Timeline } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projectsData = [
    {
      title: "PaisaPath",
      content: (
        <div>
          <p className="text-foreground text-sm md:text-base font-semibold mb-4">
            Personal Finance Management App
          </p>
          <p className="text-muted-foreground text-sm md:text-base mb-4">
            A comprehensive finance tracking application that helps users manage expenses, set budgets, 
            and visualize spending patterns with intuitive dashboards and smart insights.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary" className="text-xs">React</Badge>
            <Badge variant="secondary" className="text-xs">TypeScript</Badge>
            <Badge variant="secondary" className="text-xs">Chart.js</Badge>
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
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop"
              alt="PaisaPath finance dashboard"
              className="rounded-lg object-cover h-32 md:h-48 w-full border border-border hover:scale-105 transition-transform"
            />
            <img
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500&h=300&fit=crop"
              alt="PaisaPath budget tracking"
              className="rounded-lg object-cover h-32 md:h-48 w-full border border-border hover:scale-105 transition-transform"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Linguistic AI Chatbot",
      content: (
        <div>
          <p className="text-foreground text-sm md:text-base font-semibold mb-4">
            Multilingual Conversational AI
          </p>
          <p className="text-muted-foreground text-sm md:text-base mb-4">
            An intelligent chatbot that supports multiple languages with natural language processing, 
            real-time translation, and context-aware responses for seamless cross-language communication.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary" className="text-xs">React</Badge>
            <Badge variant="secondary" className="text-xs">OpenAI API</Badge>
            <Badge variant="secondary" className="text-xs">NLP</Badge>
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
              src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&h=300&fit=crop"
              alt="Linguistic AI Chatbot interface"
              className="rounded-lg object-cover h-32 md:h-48 w-full border border-border hover:scale-105 transition-transform"
            />
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop"
              alt="AI conversation feature"
              className="rounded-lg object-cover h-32 md:h-48 w-full border border-border hover:scale-105 transition-transform"
            />
          </div>
        </div>
      ),
    },
    {
      title: "AI Student & Study Planner",
      content: (
        <div>
          <p className="text-foreground text-sm md:text-base font-semibold mb-4">
            Smart Academic Management System
          </p>
          <p className="text-muted-foreground text-sm md:text-base mb-4">
            An AI-powered study companion that creates personalized study schedules, tracks academic progress, 
            and provides intelligent recommendations to optimize learning outcomes.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary" className="text-xs">React</Badge>
            <Badge variant="secondary" className="text-xs">TypeScript</Badge>
            <Badge variant="secondary" className="text-xs">AI/ML</Badge>
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
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop"
              alt="AI Study Planner dashboard"
              className="rounded-lg object-cover h-32 md:h-48 w-full border border-border hover:scale-105 transition-transform"
            />
            <img
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&h=300&fit=crop"
              alt="Study schedule view"
              className="rounded-lg object-cover h-32 md:h-48 w-full border border-border hover:scale-105 transition-transform"
            />
          </div>
        </div>
      ),
    },
    {
      title: "AI Dental Clinic System",
      content: (
        <div>
          <p className="text-foreground text-sm md:text-base font-semibold mb-4">
            AI-Powered Dental Clinic Management
          </p>
          <p className="text-muted-foreground text-sm md:text-base mb-4">
            A comprehensive clinic management system with AI-assisted diagnosis, appointment scheduling, 
            patient records management, and treatment planning for modern dental practices.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary" className="text-xs">React</Badge>
            <Badge variant="secondary" className="text-xs">Node.js</Badge>
            <Badge variant="secondary" className="text-xs">AI Diagnostics</Badge>
          </div>
          <div className="mb-6">
            <p className="text-foreground font-medium mb-3">Key Features:</p>
            <ul className="text-muted-foreground text-sm space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-foreground">✓</span> AI-Assisted X-Ray Analysis
              </li>
              <li className="flex items-center gap-2">
                <span className="text-foreground">✓</span> Smart Appointment Scheduling
              </li>
              <li className="flex items-center gap-2">
                <span className="text-foreground">✓</span> Patient Records & History
              </li>
              <li className="flex items-center gap-2">
                <span className="text-foreground">✓</span> Treatment Plan Generation
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&h=300&fit=crop"
              alt="Dental clinic system"
              className="rounded-lg object-cover h-32 md:h-48 w-full border border-border hover:scale-105 transition-transform"
            />
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&h=300&fit=crop"
              alt="AI dental diagnostics"
              className="rounded-lg object-cover h-32 md:h-48 w-full border border-border hover:scale-105 transition-transform"
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
