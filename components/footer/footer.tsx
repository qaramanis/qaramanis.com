import Menu from "./menu";

export default function Footer() {
  return (
    <footer className="border-t border-[#666666] text-[#666666] h-[20vh] flex items-center justify-center">
      <div className="md:w-[40vw] justify-between flex md:flex-row flex-col items-center ">
        <Menu />
        <div className="text-center bottom-0">
          &copy; {new Date().getFullYear()} Apostolos Karamanis
        </div>
      </div>
    </footer>
  );
}
