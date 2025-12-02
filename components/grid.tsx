export default function Grid() {
  return (
    <div className="fixed inset-0 h-screen w-screen -z-10 pointer-events-none">
      <div className="h-full w-full max-w-screen-2xl mx-auto px-2 md:px-4 lg:px-8">
        <div className="grid grid-cols-12 gap-1 md:gap-2 lg:gap-4 h-full">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="bg-accent/20 h-full" />
          ))}
        </div>
      </div>
    </div>
  );
}
