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
          I'm a developer passionate about building software that are clean, scalable, and user-focused web applications 
          where thoughtful design meets robust engineering. My favorite work lies at the intersection of functionality 
          and usability — building solutions that are not only technically sound but also intuitive, accessible, 
          and built with purpose.
        </p>
        <p>
          I’ve worked extensively with Python, Django, and Flask to develop full-stack web applications — from dynamic 
          tutorial platforms to <span className="font-medium text-foreground">Transport management systems</span> {" "} 
        <a
            href="svdstransport.web.app"
            className="font-medium text-accent-teal hover:text-accent-teal-glow transition-colors duration-300 glow-effect"
            target="_blank"
            rel="noopener noreferrer"
          >
            (svdstransport) 
          </a>
        , <span className="font-medium text-foreground">Dynamic Tutorial web app</span> {" "} 
          <a
            href="#"
            className="font-medium text-accent-teal hover:text-accent-teal-glow transition-colors duration-300 glow-effect"
            target="_blank"
            rel="noopener noreferrer"
          >
            (Tutorial site)
          </a>
        , and <span className="font-medium text-foreground">interactive blogs</span> {" "}
          <a
            href="saikiranpgrrcde.pythonanywhere.com"
            className="font-medium text-accent-teal hover:text-accent-teal-glow transition-colors duration-300 glow-effect"
            target="_blank"
            rel="noopener noreferrer"
          >
            (Blogsite)
          </a>
          . Alongside modern web development, I bring valuable experience in legacy systems, having worked at Cognizant as a Jr. Software Engineer, where I analyzed COBOL applications, supported data migration, and contributed to modernization projects involving Java and Python.
        </p>
        <p>
          Currently pursuing my Master of Computer Applications (MCA) at Osmania University, I’m continuously expanding 
          my expertise in software design, cloud technologies, and cybersecurity — an area I’m particularly excited about. 
          I also hold certifications in 
          <span className="font-medium text-foreground"> Python</span> from {" "}
          <a
            href="https://www.udemy.com/certificate/UC-9f3ee93c-d049-4d4f-91e1-3ca15f3979f3/"
            className="font-medium text-accent-teal hover:text-accent-teal-glow transition-colors duration-300 glow-effect"
            target="_blank"
            rel="noopener noreferrer"
          >
            (Udemy)
          </a>,
          <span className="font-medium text-foreground"> COBOL</span> and{" "}
          <span className="font-medium text-foreground">Cybersecurity </span> 
          from '
          <a
            href="https://www.netacad.com/s/ff9e491c-49be-4734-803e-a79e6e83dab1/users/2340b129-e366-4e77-87fd-e15d3ce35625/_certificate_saikiran26499-gmail-com_561dde96-20b1-4d64-b7a3-b1e1ec6cb29f.pdf?Expires=1755894150&Signature=F60~NGnWpvN2pa9p0vwUs5uNKBuYoaU4F5b1z71En-1Ih3NKsO2uHVcQMUXx3DvBfGq-D30jV6Km0obNrFMyVkIGmQuAOiq6SujNiBBo4J1gDYxd1aqfNCvyciGpiMMBQ9lYHXqGEMyqe2j9fmpH9l1KZrw9oM-vKPmaAtlvDrZtdMuvil9Wa2PkKuC5KPTS9FOvBaoawTFDTz2TTCEOlYphpWCha4Ct4A45ZRtOTW8g5NgVh~5yLUyAb~JyDWLoW7bE2qrIt8nnmy3FVPDP0tkAs9ZULmItS04IPPjuw8nufWxbslXEwH-U-AbVikGMPQE~7ziVyMVqdQRz0FKXMw__&Key-Pair-Id=K2KLPFOPQWYG51#view=Fit&toolbar=0&statusbar=0&messages=0&navpanes=0&scrollbar=0"
            className="font-medium text-accent-teal hover:text-accent-teal-glow transition-colors duration-300 glow-effect"
            target="_blank"
            rel="noopener noreferrer"
          >
            (Cisco)
          </a>
          ' and '
          <a
            href="https://skills.yourlearning.ibm.com/certificate/share/889f1b203fewogICJvYmplY3RJZCIgOiAiUExBTi0zNEU3MUIzQUEyQzEiLAogICJsZWFybmVyQ05VTSIgOiAiNDA3NzAzMFJFRyIsCiAgIm9iamVjdFR5cGUiIDogIkFDVElWSVRZIgp9f2d5b49e53-10"
            className="font-medium text-accent-teal hover:text-accent-teal-glow transition-colors duration-300 glow-effect"
            target="_blank"
            rel="noopener noreferrer"
          >
            (IBM)
          </a>
          ', reflecting my commitment to lifelong learning.{" "} 
          Additionally, I also keep releasing blogs in {" "}
          <a
            href="https://saikirannalla.medium.com"
            className="font-medium text-accent-teal hover:text-accent-teal-glow transition-colors duration-300 glow-effect"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium
          </a>{" "}
          , sharing content of Cybersecurity and more.
        </p>
        <p>
          When I'm not coding or studying, you’ll find me on the badminton court, practicing calligraphy, sketching, or capturing moments through photography.
          I believe in writing clean, efficient code — but also in maintaining balance, creativity, and curiosity in both life and technology.
          Some of my artwork is shared on  {" "}
          <a
            href="https://www.instagram.com/saikiran_chowdhary?igsh=dmlkejlldmRlNG0x"
            className="font-medium text-accent-teal hover:text-accent-teal-glow transition-colors duration-300 glow-effect"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          , where I enjoy blending my love for design and expression.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;