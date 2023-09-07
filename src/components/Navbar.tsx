"use client";
import React from "react";
import { ComputerDesktopIcon, Bars4Icon } from "@heroicons/react/20/solid";
import NavLinks from "./NavLinks";
import UserStatus from "./UserStatus";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [mobileLinks, setMobile] = useState(false);

  return (
    <header className="flex flex-row items-center justify-between p-2 w-full bg-slate-800 text-white h-16">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <ComputerDesktopIcon className="h-8 w-8" /> Tech Store
      </h1>
      {/* <button onClick={() => setMobile(!mobileLinks)} className="ham-menu-icon">
        <Bars4Icon className="h-8 w-8" />
      </button> */}
      <NavLinks mobileLinks={mobileLinks} />
      <UserStatus mobileLinks={mobileLinks} />
      {/* <section
        className={` ${mobileLinks ? "ham-menu showMenu" : "nav"}`}
      ></section> */}
    </header>
  );
};

export default Navbar;
