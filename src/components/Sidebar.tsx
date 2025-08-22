import { Github, Linkedin, Instagram, Globe, Mail } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const sections = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/SaikiranNalla", 
      label: "GitHub",
      color: "hover:text-accent-teal" 
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/saikirannalla/", 
      label: "LinkedIn",
      color: "hover:text-accent-blue" 
    },
    { 
      icon: Globe, 
      href: "https://saikirannalla.medium.com", 
      label: "Medium",
      color: "hover:text-accent-purple" 
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/saikiran_chowdhary?igsh=dmlkejlldmRlNG0x", 
      label: "Instagram",
      color: "hover:text-accent-teal" 
    },
    { 
      icon: Mail, 
      href: "mailto:saikiran26499@outlook.com", 
      label: "Email",
      color: "hover:text-accent-blue" 
    }
  ];

  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        {/* Profile Image */}
        <div className="mb-8">
          <img
            src={profileImage}
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover mx-auto lg:mx-0 ring-2 ring-accent-teal/20 glow-effect"
          />
        </div>

        {/* Name & Title */}
        <div className="text-center lg:text-left mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-glow">
            Saikiran Nalla
          </h1>
          <h2 className="text-xl lg:text-2xl font-medium text-accent-teal mb-4">
            Software Engineer
          </h2>
          <p className="text-foreground-muted max-w-xs mx-auto lg:mx-0">
            Solving real-world problems through code, from enterprise systems to full-stack web applications.
          </p>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:block" aria-label="In-page jump links">
          <ul className="space-y-1">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => onSectionChange(section.id)}
                  className={`group flex items-center py-3 text-sm font-medium uppercase tracking-widest transition-all duration-300 ${
                    activeSection === section.id
                      ? "text-accent-teal"
                      : "text-foreground-muted hover:text-foreground"
                  }`}
                >
                  <span
                    className={`mr-4 h-px transition-all duration-300 ${
                      activeSection === section.id
                        ? "w-16 bg-accent-teal"
                        : "w-8 bg-foreground-muted group-hover:w-16 group-hover:bg-foreground"
                    }`}
                  />
                  <span className="nav-text">{section.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Social Links */}
      <div className="flex justify-center lg:justify-start space-x-6 mt-12 lg:mt-0">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`text-foreground-muted ${social.color} transition-all duration-300 transform hover:scale-110 glow-effect`}
            >
              <Icon size={24} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;