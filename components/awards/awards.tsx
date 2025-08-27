"use client";

import TitleCard from "../title-card";

const awards = [
  {
    title: "Netcompany Hackathon",
    description: "1st place | AI Travel Agent",
    date: "Feb. 2025",
  },
  {
    title: "Open Jar Jam",
    description: "3rd place | Game Jam: New Take on an Old Game",
    date: "May 2025",
  },
];

export default function Awards() {
  return (
    <div className="pt-[4rem]">
      <div className="pb-[1rem]">Awards & Honors</div>
      {awards.map((item, index) => (
        <div key={index}>
          <TitleCard
            title={item.title}
            description={item.description}
            date={item.date}
          />
        </div>
      ))}
    </div>
  );
}
