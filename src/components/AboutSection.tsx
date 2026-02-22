import React from "react";

const AboutSection = () => {
  return (
      <section id="about" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
          <h2 className="text-sm font-bold uppercase tracking-widest text-accent-teal">
            About
          </h2>
        </div>

        <div className="space-y-6 text-foreground-subtle leading-relaxed">
          <p>
            I’m a <span className="font-medium text-foreground">Python backend developer</span> focused on building
            production-ready web applications with <span className="font-medium text-foreground">Django</span> and{" "}
            <span className="font-medium text-foreground">Django REST Framework</span>. I design and implement REST APIs,
            database models, and deployment workflows that turn real-world requirements into reliable, maintainable systems.
          </p>

          <p>
            My early production exposure came as a Junior Software Engineer at Cognizant, where I worked with legacy systems,
            analyzed COBOL applications, and supported modernization efforts. Since then I’ve transitioned into modern
            web development and shipped several apps end-to-end — from database design to deployment and CI pipelines.
          </p>

          <p>
            Projects include a transport management platform{" "}
            <a
                href="https://svdstransport.web.app"
                className="font-medium text-accent-teal hover:text-accent-teal-glow transition-colors duration-300 glow-effect"
                target="_blank"
                rel="noopener noreferrer"
            >
              (svdstransport)
            </a>
            , a dynamic tutorial web app, and an interactive blog{" "}
            <a
                href="https://saikiranpgrrcde.pythonanywhere.com"
                className="font-medium text-accent-teal hover:text-accent-teal-glow transition-colors duration-300 glow-effect"
                target="_blank"
                rel="noopener noreferrer"
            >
              (Blogsite)
            </a>
            . These projects use PostgreSQL/MySQL, Docker, and include API endpoints, authentication flows, and tests.
          </p>

          <p>
            I’m currently pursuing my Master of Computer Applications (MCA) at Osmania University and actively improving
            my skills in backend architecture, testing (TDD), and cloud deployment. I hold certificates in Python, COBOL,
            and cybersecurity (Udemy, Cisco, IBM) and I publish technical posts on{" "}
            <a
                href="https://saikirannalla.medium.com"
                className="font-medium text-accent-teal hover:text-accent-teal-glow transition-colors duration-300 glow-effect"
                target="_blank"
                rel="noopener noreferrer"
            >
              Medium
            </a>
            .
          </p>

          <p>
            I’m open to backend / Django developer roles where I can contribute to production systems, collaborate with
            engineering teams, and continue shipping robust software. If you’d like to see architecture notes or a quick
            demo of any project, I’m happy to share.
          </p>

          <p>
            Outside work I enjoy badminton, calligraphy, sketching, and photography — creative hobbies that help me stay
            curious and bring design-aware thinking to engineering. See some of my artwork on{" "}
            <a
                href="https://www.instagram.com/saikiran_chowdhary"
                className="font-medium text-accent-teal hover:text-accent-teal-glow transition-colors duration-300 glow-effect"
                target="_blank"
                rel="noopener noreferrer"
            >
              Instagram
            </a>
            .
          </p>
        </div>
      </section>
  );
};

export default AboutSection;