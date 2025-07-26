"use client";

import TitleCard from "../title-card";

const experience = [
  {
    title: "Freelancer",
    description: "Anything web related",
    date: "2024 - now",
  },
];

export default function Experience() {
  return (
    <div className="pt-[4rem]">
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
