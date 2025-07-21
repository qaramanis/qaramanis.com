export default function Footer() {
  return (
    <footer className="border-t border-[#666666] text-[##666666] py-4 h-[15vh]">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
}
