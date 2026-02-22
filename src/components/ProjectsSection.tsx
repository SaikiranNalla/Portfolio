import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "CookBook",
      description: "A web app for recipe management and smart grocery list generation. Users select multiple recipes, and the system automatically consolidates ingredients, removes duplicates, and creates organized shopping lists. Built with Django and PostgreSQL, featuring responsive design, AJAX updates, and PythonAnywhere deployment.",
      image: "/assets/CookBook_page.png",
      technologies: ["Django", "Python", "Bootstrap", "Postgresql", "PythonAnywhere"],
      liveUrl: "https://saikiran26499.pythonanywhere.com",
      githubUrl: "https://github.com/SaikiranNalla/TheRecipeDB"
    },
    {
      title: "SVDS Transport",
      description: "Web application for a transportation company to manage transit orders and generate billing invoices. Covers core business operations like customer management, order tracking, and automated bill generation using Django, PostgreSQL, and Bootstrap for a responsive frontend.",
      image: "/assets/svds_frontpage.jpg",
      technologies: ["Django", "Python", "Bootstrap", "Postgresql"],
      liveUrl: "https://svdstransport.web.app",
      githubUrl: "https://github.com/SaikiranNalla/SVDS_Admin"
    },
    {
      title: "Tutorials Website",
      description: "Multi-topic educational platform where users can browse and learn from structured tutorial content. Built with Django and PostgreSQL, featuring an admin-controlled content system that allows authorized users to add, edit, or remove lessons and categories dynamically.",
      image: "/assets/sktutorials.png",
      technologies: ["Django", "Python", "Bootstrap", "Postgresql"],
      liveUrl: "https://sktutorials.onrender.com",
      githubUrl: "https://github.com/SaikiranNalla/Tutorial-Website"
    },
    {
      title: "Blogsite",
      description: "Blogsite Web Application to write blogs and role based access to write blogs, users can write comments each blogs and CRUD functionality for posts and comments.",
      image: "/assets/blogsite.jpg",
      technologies: ["Flask", "Python", "Bootstrap", "Postgresql", "Render"],
      liveUrl: "https://saikiranpgrrcde.pythonanywhere.com",
      githubUrl: "https://github.com/SaikiranNalla/Blog-site"
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
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-medium leading-snug text-foreground flex-1">
                  <div>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-accent-teal focus-visible:text-accent-teal group/link text-base transition-colors duration-300 relative"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      <span className="relative z-10">{project.title}</span>
                      <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none ml-1 relative z-10" />
                    </a>
                  </div>
                </h3>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground-muted hover:text-accent-teal transition-colors duration-300 relative z-20 flex-shrink-0 mt-1"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
              
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