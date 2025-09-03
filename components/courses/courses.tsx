"use client";

import TitleCard from "../title-card";

const courses = [
  {
    title: "HarvardX",
    description: "CS50x: CS50's Introduction to Computer Science",
  },
  {
    title: "University of Helsinki",
    description: "Python Programming MOOC: Advanced Course in Programming 2025",
  },
];

export default function Courses() {
  return (
    <div className="pt-[4rem]">
      <div className="pb-[1rem]">Courses & Certifications</div>
      {courses.map((item, index) => (
        <div key={index}>
          <TitleCard title={item.title} description={item.description} />
        </div>
      ))}
    </div>
  );
}
