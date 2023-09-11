"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";

interface navLinkProps {
  mobileLinks: boolean;
}
const NavLinks: React.FC<navLinkProps> = ({ mobileLinks }) => {
  const { data: session } = useSession();

  if (!mobileLinks) {
    return (
      <>
        <nav className="flex items-center justify-center self-center gap-6 text-lg ">
          <Link href="/">Home</Link>
          <Link href="/store?cat=">Store</Link>
          {session ? <Link href="/order-history">Order History</Link> : ""}
        </nav>
      </>
    );
  } else {
    return (
      <div>
        <nav className="flex flex-col items-baseline ml-4 gap-6 text-lg ">
          <Link href="/">Home</Link>
          <Link href="/store?cat=">Store</Link>
          {session ? <Link href="/order-history">Order History</Link> : ""}
        </nav>
      </div>
    );
  }
};

export default NavLinks;
