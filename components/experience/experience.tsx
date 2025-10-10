"use client";

import TitleCard from "../title-card";

const experience = [
  {
    title: "Vidavo",
    description: "Full Stack Web Developer",
    date: "Sept. 2025 - present",
  },
  {
    title: "Freelance",
    description: "Web Developer",
    date: "∞",
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
