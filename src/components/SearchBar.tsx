"use client";
import { updateSearchParams } from "@/utils/helpers";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  useEffect(() => {
    const newpath = updateSearchParams("search", searchTerm);
    router.push(newpath);
  }, [searchTerm, router]);

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search products"
        className="border p-2 rounded-l"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
