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
    
      <label className="input input-bordered flex items-center gap-2 ml-2 border p-2 rounded-xl w-full  border-slate-400 shadow-md">
        <input type="text" className="grow" placeholder="Search"  value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </div>
  );
};

export default SearchBar;
