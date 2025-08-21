import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "SVDS Transport",
      description: "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
      image: "/placeholder.svg",
      technologies: ["Django", "Python", "Bootstrap", "Postgresql"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Tutorials Website",
      description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
      image: "/placeholder.svg",
      technologies: ["Django", "Python", "Bootstrap", "Postgresql"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Blogsite",
      description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      image: "/placeholder.svg",
      technologies: ["Flask", "Python", "Bootstrap", "Postgresql", "Render"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-accent-teal">
          Projects
        </h2>
      </div>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative grid gap-4 pb-1 transition-all duration-300 hover:!opacity-100 group-hover/list:opacity-50 lg:grid-cols-3 lg:gap-8"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition duration-300 group-hover:bg-navy-light/50 group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg lg:block" />
            
            <div className="z-10 lg:col-span-1">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="rounded border-2 border-navy-light transition group-hover:border-navy-lighter sm:order-1 sm:col-span-2 sm:translate-y-1"
                loading="lazy"
              />
            </div>
            
            <div className="z-10 lg:col-span-2">
              <h3 className="font-medium leading-snug text-foreground">
                <div>
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-accent-teal focus-visible:text-accent-teal group/link text-base transition-colors duration-300"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                    <span>{project.title}</span>
                    <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none ml-1" />
                  </a>
                </div>
                <div className="flex items-center mt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground-muted hover:text-accent-teal transition-colors duration-300"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </h3>
              
              <p className="mt-2 text-sm leading-normal text-foreground-subtle">
                {project.description}
              </p>
              
              <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                {project.technologies.map((tech, techIndex) => (
                  <li key={techIndex} className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-accent-teal/10 px-3 py-1 text-xs font-medium leading-5 text-accent-teal">
                      {tech}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12">
        <a
          className="inline-flex items-center font-medium leading-tight text-foreground hover:text-accent-teal focus-visible:text-accent-teal group transition-colors duration-300"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <span className="border-b border-transparent pb-px transition group-hover:border-accent-teal motion-reduce:transition-none">
              View Full Project
            </span>
            <span className="whitespace-nowrap">
              <span className="border-b border-transparent pb-px transition group-hover:border-accent-teal motion-reduce:transition-none">
                {" "}Archive
              </span>
              <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1 motion-reduce:transition-none" />
            </span>
          </span>
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;