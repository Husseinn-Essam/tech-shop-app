"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useState } from "react";
const NavLinks: React.FC = () => {
  // const pathname = usePathname();
  // const [activeButton, setActiveButton] = useState(pathname);

  // const handleButtonClick = (buttonName: string) => {
  //   setActiveButton(buttonName);
  // };
  return (
    <div>
      <nav className="flex items-center gap-6 text-lg ">
        <Link
          href="/"
          // className={`${
          //   activeButton == "/" ? "font-bold underline underline-offset-8	" : ""
          // }`}
          // onClick={() => handleButtonClick("/")}
        >
          Home
        </Link>
        <Link
          // className={`${
          //   activeButton == "/store"
          //     ? "font-bold underline underline-offset-8	"
          //     : ""
          // }`}
          href="/store?cat="
          // onClick={() => handleButtonClick("/store")}
        >
          Store
        </Link>
      </nav>
    </div>
  );
};

export default NavLinks;
