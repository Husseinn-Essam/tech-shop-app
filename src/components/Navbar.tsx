"use client";
import React from "react";
import { ComputerDesktopIcon, Bars4Icon } from "@heroicons/react/20/solid";
import NavLinks from "./NavLinks";
import UserStatus from "./UserStatus";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [mobileLinks, setMobile] = useState(false);
  const mobileLinksContent = (
    <>
      <section className={`ham-menu ${mobileLinks ? " active" : ""}`}>
        <NavLinks mobileLinks={mobileLinks} />
        <UserStatus mobileLinks={mobileLinks} />
      </section>
    </>
  );

  const nonMobileLinksContent = (
    <>
      {!mobileLinks ? (
        <>
          <NavLinks mobileLinks={mobileLinks} />{" "}
        </>
      ) : (
        <></>
      )}
      <section className={` ${mobileLinks ? "ham-menu active" : "nav"}`}>
        <UserStatus mobileLinks={mobileLinks} />
      </section>
    </>
  );
  return (
    <header className="flex flex-row items-center justify-between p-2 w-full bg-slate-800 text-white h-16">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <ComputerDesktopIcon className="h-8 w-8" /> Tech Store
      </h1>
      <div className="flex flex-row navLinks">
        <NavLinks mobileLinks={mobileLinks} />
      </div>
      <div className="flex flex-row navLinks">
        <UserStatus mobileLinks={mobileLinks} />
      </div>
      <section className={`ham-menu ${mobileLinks ? " active" : ""}`}>
        <div className="flex flex-col">
          <NavLinks mobileLinks={mobileLinks} />
          <UserStatus mobileLinks={mobileLinks} />
        </div>
      </section>{" "}
      <button onClick={() => setMobile(!mobileLinks)} className="ham-menu-icon">
        <Bars4Icon className="h-8 w-8" />
      </button>
    </header>
  );
};

export default Navbar;
