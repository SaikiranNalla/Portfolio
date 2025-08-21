import { ExternalLink } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      period: "2024 — PRESENT",
      title: "Free Lancer",
      company: "Klaviyo",
      companyUrl: "#",
      description: "Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and PMs, to implement and advocate for best practices in web accessibility.",
      technologies: ["Python", "Django", "Flask", "Bootstrap"]
    },
    {
      period: "2022 — 2024",
      title: "Software Engineer",
      company: "Upstatement",
      companyUrl: "#",
      description: "Delivered high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more.",
      technologies: ["React", "Node.js", "TypeScript", "Mainframe"]
    },
    // {
    //   period: "2018 — 2022",
    //   title: "Software Engineer",
    //   company: "Scout Studio",
    //   companyUrl: "#",
    //   description: "Developed and shipped highly interactive web applications for Fortune 500 companies, startups, and everyone in between. Collaborated with designers and project managers to create polished, user-friendly experiences.",
    //   technologies: ["JavaScript", "React", "Node.js", "MongoDB"]
    // }
  ];

  return (
    <section id="experience" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-accent-teal">
          Experience
        </h2>
      </div>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative grid pb-1 transition-all duration-300 hover:!opacity-100 group-hover/list:opacity-50 lg:grid-cols-3 lg:gap-8"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition duration-300 group-hover:bg-navy-light/50 group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg lg:block" />
            
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-foreground-muted lg:col-span-1">
              {exp.period}
            </header>
            
            <div className="z-10 lg:col-span-2">
              <h3 className="font-medium leading-snug text-foreground">
                <div>
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-accent-teal focus-visible:text-accent-teal group/link text-base transition-colors duration-300"
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                    <span>
                      {exp.title} · {exp.company}
                    </span>
                    <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none ml-1" />
                  </a>
                </div>
              </h3>
              
              <p className="mt-2 text-sm leading-normal text-foreground-subtle">
                {exp.description}
              </p>
              
              <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                {exp.technologies.map((tech, techIndex) => (
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
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <span className="border-b border-transparent pb-px transition group-hover:border-accent-teal motion-reduce:transition-none">
              View Full
            </span>
            <span className="whitespace-nowrap">
              <span className="border-b border-transparent pb-px transition group-hover:border-accent-teal motion-reduce:transition-none">
                {" "}Résumé
              </span>
              <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1 motion-reduce:transition-none" />
            </span>
          </span>
        </a>
      </div>
    </section>
  );
};

export default ExperienceSection;