"use client";
import { updateSearchParams } from "@/utils/helpers";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  useEffect(() => {
    const newpath = updateSearchParams("search", searchTerm.toLowerCase());
    router.push(newpath);
  }, [searchTerm, router]);

  return (
    <div className="custom-search flex items-center w-1/2 ml-6 ">
      <MagnifyingGlassIcon className="h-6 w-6 text-white" />
      <input
        type="text"
        placeholder="Search products"
        className="ml-2 border p-2 rounded-xl w-full  border-slate-400 shadow-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
