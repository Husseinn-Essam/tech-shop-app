"use client";
import React, { useState } from "react";

const CategoryFilter: React.FC = () => {
  const categories: string[] = ["Laptops", "Mobile Phones"];
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryToggle = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="relative">
      <button
        className="py-2 px-4 border rounded text-gray-700"
        onClick={handleToggleDropdown}
      >
        Select Categories
      </button>
      {isOpen && (
        <div className="absolute mt-2 bg-white border rounded shadow-md">
          {categories.map((category) => (
            <label key={category} className="block px-4 py-2">
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
