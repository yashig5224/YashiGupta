import { AnimatedContactSection } from "@/components/ui/animated-contact-section";

const ContactSection = () => {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative min-h-screen">
      <h2 id="contact-heading" className="sr-only">Get in touch</h2>
      <AnimatedContactSection />
    </section>
  );
};

export default ContactSection;
