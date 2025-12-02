export default function Footer() {
  return (
    <footer className="w-full text-lg md:text-xl bg-background mt-4 md:mt-8 lg:mt-16 py-2">
      <div className="mx-auto px-2 md:px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
          <div className="flex flex-row gap-2 md:gap-4 lg:gap-8 self-start">
            <a href="https://twitter.com/qaramanis" className="btn-primary">
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/apostolos-karamanis/"
              className="btn-primary"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/qaramanis/"
              className="btn-primary"
            >
              Instagram
            </a>
            <a href="https://github.com/qaramanis" className="btn-primary">
              GitHub
            </a>
          </div>
          {/*<a
            href="/resume-08.10.2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Curriculum Vitae
          </a>*/}
          <a
            href="mailto:apostkaram@gmail.com"
            className="btn-primary self-end md:self-auto"
          >
            apostkaram@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
