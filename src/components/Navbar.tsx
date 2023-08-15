import React from "react";
import { ComputerDesktopIcon } from "@heroicons/react/20/solid";
import NavLinks from "./NavLinks";
const Navbar: React.FC = () => {
  return (
    <header className="flex flex-row items-center justify-between p-2 w-full bg-slate-800 text-white h-16">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <ComputerDesktopIcon className="h-8 w-8" /> Tech Store
      </h1>
      <NavLinks />
    </header>
  );
};

export default Navbar;
