import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram, Phone } from "lucide-react";
import { Sparkles } from "@/components/ui/sparkles";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:hello@example.com",
    label: "Email",
  },
  {
    icon: Instagram,
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: Phone,
    href: "tel:+1234567890",
    label: "Phone",
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="relative min-h-[300px] w-full flex flex-col items-center justify-center overflow-hidden bg-background">
        <div className="text-center z-10 p-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-2"
          >
            Let's Connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-8"
          >
            Reach out through any platform
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center items-center gap-6 md:gap-10"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.1 }}
              >
                <social.icon className="w-6 h-6 md:w-8 md:h-8" />
                <span className="text-xs md:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <div className="absolute inset-0 z-0">
          <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-background via-transparent to-transparent h-1/3 z-10" />
          <Sparkles
            density={600}
            speed={0.8}
            size={1.2}
            color="hsl(var(--foreground))"
            className="w-full h-full"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-4 z-10 text-xs text-muted-foreground text-center px-4"
        >
          <p>
            Designed & Built with ❤️ by{" "}
            <span className="text-foreground font-semibold">Yashi Gupta</span>
          </p>
          <p className="mt-1">© {new Date().getFullYear()} All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
