"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { works, WORK_CATEGORIES, WorkCategory } from "@/data/works";
import WorkItem from "./work-item";

type FilterCategory = "All" | WorkCategory;

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
            className={`py-2 text-lg whitespace-nowrap transition-colors duration-300 cursor-pointer ${
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
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-8 md:gap-x-2 md:gap-y-16 lg:gap-x-4 lg:gap-y-16"
        >
          {filteredWorks.map((work) => (
            <WorkItem key={work.id} work={work} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
