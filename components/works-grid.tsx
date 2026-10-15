"use client";

import { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { works, WORK_CATEGORIES, WorkCategory } from "@/data/works";
import WorkItem from "./work-item";

type FilterCategory = "All" | WorkCategory;

// Same curve as --ease-out in globals.css.
const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function WorksGrid() {
  const [selectedCategory, setSelectedCategory] =
    useState<FilterCategory>("All");

  const categories: FilterCategory[] = ["All", ...WORK_CATEGORIES];

  const filteredWorks = (
    selectedCategory === "All"
      ? works
      : works.filter((work) => work.categories.includes(selectedCategory))
  ).toReversed();

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex gap-4 mb-1 md:mb-2 lg:mb-4 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            aria-pressed={selectedCategory === category}
            className={`py-2 text-lg whitespace-nowrap transition-colors duration-200 cursor-pointer focus-visible:underline focus-visible:underline-offset-4 focus-visible:text-foreground ${
              selectedCategory === category
                ? "text-foreground"
                : "text-accent/50 hover:text-accent"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Works Grid */}
      <MotionConfig reducedMotion="user">
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-8 md:gap-x-2 md:gap-y-16 lg:gap-x-4 lg:gap-y-16">
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.25, ease: EASE_OUT },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, ease: EASE_OUT },
                }}
                transition={{
                  layout: { type: "spring", duration: 0.4, bounce: 0 },
                }}
              >
                <WorkItem work={work} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </MotionConfig>
    </div>
  );
}
