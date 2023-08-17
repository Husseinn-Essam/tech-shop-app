"use client";
import React, { useState, useEffect } from "react";
import { updateSearchParams } from "@/utils/helpers";
import { useRouter } from "next/navigation";
const CategoryFilter: React.FC = () => {
  // hard code cats to be removed
  const categories: string[] = ["Laptops", "Mobile Phones"];

  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryToggle = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
  };

  useEffect(() => {
    const newPathName = updateSearchParams("cat", selectedCategories.join(","));
    router.push(newPathName);
  }, [selectedCategories, router]);

  return (
    <div className="relative">
      <button
        className="py-2 px-4 border rounded text-gray-700"
        onClick={handleToggleDropdown}
      >
        Select Categories
      </button>
      {isOpen && (
        <div className="z-10 absolute mt-2 bg-white border rounded shadow-md">
          {categories.map((category) => (
            <label key={category} className=" px-4 py-2 flex flex-row gap-1">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryToggle(category)}
              />
              {category}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;
