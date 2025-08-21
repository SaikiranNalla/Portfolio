import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-accent-teal">
          Contact
        </h2>
      </div>
      
      <div className="space-y-6">
        <p className="text-foreground-subtle leading-relaxed">
          I'm always interested in hearing about new opportunities, especially ambitious 
          or large-scale projects. However, if you have other requests or questions, 
          don't hesitate to reach out.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-4 text-foreground-subtle">
            <Mail className="h-5 w-5 text-accent-teal" />
            <a 
              href="mailto:saikiran26499@outlook.com" 
              className="hover:text-accent-teal transition-colors duration-300"
            >
              saikiran26499@outlook.com
            </a>
          </div>
          
          <div className="flex items-center space-x-4 text-foreground-subtle">
            <Phone className="h-5 w-5 text-accent-teal" />
            <a 
              href="tel:+91 9989166069" 
              className="hover:text-accent-teal transition-colors duration-300"
            >
              +91 9989166069
            </a>
          </div>
          
          <div className="flex items-center space-x-4 text-foreground-subtle">
            <MapPin className="h-5 w-5 text-accent-teal" />
            <span>Hyderabad, Telangana</span>
          </div>
        </div>
        
        <div className="pt-6">
          <a
            href="mailto:saikiran26499@outlook.com"
            className="inline-flex items-center rounded-md bg-accent-teal px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-accent-teal-glow hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-accent-teal focus:ring-offset-2 focus:ring-offset-background"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;