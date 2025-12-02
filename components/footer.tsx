export default function Footer() {
  return (
    <footer className="w-full text-xl bg-background mt-4 md:mt-8 lg:mt-16 py-2">
      <div className=" mx-auto px-2 md:px-4 lg:px-8">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-1 md:gap-2 lg:gap-4">
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
          <a href="mailto:apostkaram@gmail.com" className="btn-primary">
            apostkaram@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
