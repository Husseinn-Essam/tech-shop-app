"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import UserStatus from "./UserStatus";
interface navLinkProps {
  mobileLinks: boolean;
}
const NavLinks: React.FC = () => {
  const { data: session } = useSession();

  {
    return (
      <>
        <nav className="flex flex-col items-center justify-center self-center gap-3  text-lg w-6">
          <Link href="/">Home</Link>
          <Link href="/store?cat=">Store</Link>
          {session ? <Link href="/order-history">Order History</Link> : ""}
          <UserStatus  />
        </nav>
      </>
    );
  } 
};

export default NavLinks;
