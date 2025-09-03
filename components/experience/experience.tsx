"use client";

import TitleCard from "../title-card";

const experience = [
  {
    title: "Freelance",
    description: "Web Developer",
    date: "2024 - present",
  },
];

export default function Experience() {
  return (
    <div className="pt-[4rem]">
      <div className="pb-[1rem]">Experience</div>
      {experience.map((item, index) => (
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
