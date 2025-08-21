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
          I'm a developer passionate about crafting accessible, pixel-perfect user
          interfaces that blend thoughtful design with robust engineering. My favorite
          work lies at the intersection of design and development, creating experiences
          that not only look great but are meticulously built for performance and usability.
        </p>
        <p>
          Currently, I'm a Software Engineer at{" "}
          <a
            href="#"
            className="font-medium text-accent-teal hover:text-accent-teal-glow transition-colors duration-300 glow-effect"
            target="_blank"
            rel="noopener noreferrer"
          >
            Klaviyo
          </a>
          , specializing in accessibility. I contribute to the creation and maintenance of UI components
          that power Klaviyo's frontend, ensuring our platform meets web accessibility
          standards and best practices to deliver an inclusive user experience.
        </p>
        <p>
          In the past, I've had the opportunity to develop software across a variety of
          settings — from{" "}
          <span className="font-medium text-foreground">advertising agencies</span> and{" "}
          <span className="font-medium text-foreground">large corporations</span> to{" "}
          <span className="font-medium text-foreground">start-ups</span> and{" "}
          <span className="font-medium text-foreground">small digital product studios</span>. 
          Additionally, I also released a{" "}
          <a
            href="#"
            className="font-medium text-accent-teal hover:text-accent-teal-glow transition-colors duration-300 glow-effect"
            target="_blank"
            rel="noopener noreferrer"
          >
            comprehensive video course
          </a>{" "}
          a few years ago, guiding learners through building a web app with
          the Spotify API.
        </p>
        <p>
          In my spare time, I'm usually climbing, reading, hanging out with my wife and
          two cats, or running around Hyrule searching for{" "}
          <span className="font-medium text-accent-purple">Korok seeds</span>.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;