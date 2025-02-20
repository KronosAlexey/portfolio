"use client";

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import React from "react";

interface Props {
  className?: string;
}

const cats = [
  { id: 1, name: "Пицца" },
  { id: 2, name: "Роллы" },
  { id: 3, name: "Роллы запечённые" },
  { id: 4, name: "Роллы классика" },
  { id: 5, name: "Роллы сложные" },
  { id: 6, name: "Молочный коктейль" },
  { id: 7, name: "Бургеры" },
  { id: 8, name: "Закуски" },
  { id: 9, name: "Сеты роллов" },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {cats.map(({name , id}, index) => (
        <a
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            categoryActiveId === id &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          href={`/#${name}`}
          key={index}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
