"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useState } from "react";
interface navLinkProps {
  mobileLinks: boolean;
}
const NavLinks: React.FC<navLinkProps> = ({ mobileLinks }) => {
  if (!mobileLinks) {
    return (
      <div>
        <nav className="flex items-center gap-6 text-lg ">
          <Link href="/">Home</Link>
          <Link href="/store?cat=">Store</Link>
        </nav>
      </div>
    );
  } else {
    return (
      <div>
        <nav className="flex flex-col items-center gap-6 text-lg ">
          <Link href="/">Home</Link>
          <Link href="/store?cat=">Store</Link>
        </nav>
      </div>
    );
  }
};

export default NavLinks;
