"use client";

const awards = [
  {
    title: "Netcompany Hackathon",
    description: "1st place | AI Travel Agent",
    date: "Feb. 21 2025",
  },
  {
    title: "Open Jar Jam",
    description: "3rd place | Game Jam: New Take on an Old Game",
    date: "May 14 2025",
  },
];

export default function Awards() {
  return (
    <div className="pt-[4rem]">
      <div className="pb-[1rem]">Awards & Honors</div>
      {awards.map((item, index) => (
        <div
          key={index}
          className="pt-[1rem] flex flex-col justify-between border-b border-[#666666] hover:border-foreground relative overflow-hidden group transition-all duration-500 ease-out"
        >
          <div className="flex flex-row justify-between">
            <div>{item.title}</div>
            <div className="text-[#555555]">{item.date}</div>
          </div>
          <p className="text-[#555555]">{item.description}</p>
          <div className="absolute bottom-0 left-0 h-[1px] bg-foreground w-0 group-hover:w-full transition-all duration-500 ease-in-out" />
        </div>
      ))}
    </div>
  );
}
