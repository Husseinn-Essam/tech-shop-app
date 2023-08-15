"use client";
import React, { useState, useEffect } from "react";
import { updateSearchParams } from "@/utils/helpers";
import { useRouter } from "next/navigation";

const SortFilter: React.FC = () => {
  const router = useRouter();
  const methods = [
    "Featured",
    "Sort by Rating",
    "Sort by Price : high to low",
    "Sort by Price : low to high",
  ];
  const [sortMethod, setSort] = useState("Featured");

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value);
  };

  useEffect(() => {
    const newpath = updateSearchParams("sort", sortMethod);
    router.push(newpath);
  }, [sortMethod, router]);

  return (
    <div>
      <div className="border rounded text-gray-700">
        <select
          value={sortMethod}
          onChange={handleSortChange}
          className="block px-4 py-2"
        >
          {methods.map((method) => (
            <option key={method} value={method} className="py-2 px-4">
              {method}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SortFilter;
