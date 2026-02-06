import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef} from "react";
import { Github, Linkedin, Instagram, Mail, Phone } from "lucide-react";
import { AnimatedContactSection } from "@/components/ui/animated-contact-section";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Mail, href: "mailto:hello@yashigupta.com", label: "Email" },
  { icon: Phone, href: "tel:+1234567890", label: "Phone" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative min-h-screen" ref={ref}>
      {/* Animated Pong Background */}
      <div className="absolute inset-0">
        <AnimatedContactSection />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-end min-h-screen pb-24">
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -4 }}
            >
              <div className="p-4 rounded-full border border-border bg-card/80 backdrop-blur-sm hover:bg-secondary transition-all">
                <social.icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                {social.label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Hint Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-8 text-sm text-muted-foreground/60"
        >
          Watch the ball break through!
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
