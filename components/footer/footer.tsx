import Menu from "./menu";

export default function Footer() {
  return (
    <footer className="border-t border-accent text-accent h-[25vh] flex items-center justify-center">
      <div className="md:w-[35vw] justify-between flex md:flex-row flex-col items-center ">
        <Menu />
        <div className="text-center bottom-0 mt-1">
          &copy; {new Date().getFullYear()} Apostolos Karamanis
        </div>
      </div>
    </footer>
  );
}
