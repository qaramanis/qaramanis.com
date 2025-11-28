export default function Grid() {
  return (
    <div className="fixed h-full w-full px-[1rem] md:px-[2rem] -z-10">
      <div className="grid grid-cols-12 gap-4 h-full">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="bg-accent/20">
            {/*Item {index + 1}*/}
          </div>
        ))}
      </div>
    </div>
  );
}
