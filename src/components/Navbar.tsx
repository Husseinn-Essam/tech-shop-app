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
        {/* <ComputerDesktopIcon className="h-8 w-8" /> Tech Store */}
        
        <img className="h-10 w-10" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABpklEQVR4nO2Zy0oDQRBFG/0CF4FkUH9ExBcu1HyOSXAbstG/8Y1KXJh/iWShJMGFUcyR1hZDIBmZ6pfQF4ZhFrlVh7rDNBWlhAKqQBt4obj0b++BfWk/RSFa2FfTN4SehNYrcAhUBF4VoGa88DoZEwWtmkXPuvG8s+X5l6JDUzQzzx1BnDrGIzPPfZ8gHxZBHqZACAHSsOjZCAkyMtmWvOyZgRiFBHEiFQBkE7gEeoK+e8ZjPSTIgmXfL9n0zCuYQOYJI+VL/3YiwMGMU64TkKlTcdWWeZPZcgkyqZbUeI/58gWCaDL6JEo8IG2JcT8ikKHE+D3HfNUixEpOLVyCXOkGLEAsm2OKM5An4lFfAnJNPLqRgOwA49AEfPewWxjEwNQDw4yBIynEorlvAKdAF3j2dHWBM2BrspeiIBdASQUWUNLvq8TgDRgAJ8AaUAaWPF1lU/P458MsBYlGKoGQJuJEKkWLFC0nUilapGg5kUrRIkXLiVSKFilaTqRStIhqrzWQTERvEmPRrQRkO+21Ytprqd/J6P/T9Y7p0eNeS9c616nIa/ATcA77JAZyghEAAAAASUVORK5CYII="/>
        Tech Store
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
