"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import { redirect, useRouter } from "next/navigation";
const UserStatus: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  return (
    <>
      {!session ? (
        <div className="flex flex-row gap-2">
          <button
            onClick={() => router.push("/register")}
            className="text-slate-800 bg-white p-2 rounded font-sans font-bold"
          >
            Sign Up
          </button>
          <button
            onClick={() => router.push("/login")}
            className="text-slate-800 bg-white p-2 rounded font-sans font-bold"
          >
            Log In
          </button>
        </div>
      ) : (
        <div className="flex flex-row gap-4 text-lg">
          <div>
            Hello, {session.user.user?.username || session.user.name} !{" "}
          </div>
          <button className="flex flex-row mr-4">
            <ShoppingCartIcon className="h-8 w-8" />
            My Cart
          </button>
          <button
            className="text-slate-800 bg-white p-2 rounded font-sans font-bold"
            onClick={() => {
              signOut({ callbackUrl: "http://localhost:3000/" });
            }}
          >
            Sign Out
          </button>
        </div>
      )}
    </>
  );
};

export default UserStatus;
