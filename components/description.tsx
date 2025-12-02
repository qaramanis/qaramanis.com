export default function Description() {
  return (
    <div className="grid grid-cols-12 gap-1 md:gap-2 lg:gap-4 w-full border-t border-foreground mt-4 md:mt-8 lg:mt-16 pt-1 md:pt-2 lg:pt-4">
      <div className="col-span-10 md:text-3xl lg:text-3xl tracking-normal">
        Apostolos Karamanis is a Greece based, independent creative developer.
        <br />
        His focus is compelling digital experiences, from large scale projects
        <br />
        to small, simple ones. His work is grounded in a Computer Science
        background
        <br />
        and shaped by years of building with modern web technologies.
        <br />
        He currently works as a Full Stack Web Developer at{" "}
        <a href="https://vidavo.eu/" className="btn-primary font-medium">
          Vidavo S.A.
        </a>{" "}
        <br /> Interested in working together?{" "}
        <a
          href="mailto:apostkaram@gmail.com"
          className="btn-primary font-medium"
        >
          Get in Touch
        </a>
        .
      </div>
      <div className="col-start-11 col-span-2 flex flex-col items-start text-start">
        <div className="text-2xl">Services</div>
        <div className="flex flex-col text-xl text-accent">
          <div>Web Design</div>
          <div>Creative Direction</div>
          <div>Design Strategy</div>
          <div>Digital Media</div>
          <div>Typography</div>
          <div>Branding</div>
        </div>
      </div>
    </div>
  );
}
