"use client";

import SectionTitle from "../section-title";
import TitleCard from "../title-card";

const experience = [
  {
    title: "Vidavo S.A.",
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
    <div>
      <SectionTitle title="Experience" />
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
