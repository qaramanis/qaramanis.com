import Menu from "./menu";

export default function Footer() {
  return (
    <footer className="border-t border-accent text-accent h-[25vh] flex items-center justify-center">
      <div className="md:w-[35vw] flex flex-col items-center gap-4">
        <Menu />
        <div className="text-center">
          &copy; {new Date().getFullYear()} Apostolos Karamanis
        </div>
      </div>
    </footer>
  );
}
