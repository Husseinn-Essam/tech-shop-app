"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import { redirect, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/services/userServices";
import ProductType from "@/types/ProductType";
interface userData {
  role: string;
  _id: string;
  username: string;
  email: string;
  password: string;
  cart: ProductType[];
}
const UserStatus: React.FC = () => {
  const { data: session, status } = useSession();
  console.log(session);

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
        <div className="flex flex-row gap-4 items-center text-lg">
          <div>Hello, {session.user?.name} ! </div>
          <button className="flex flex-row relative mr-4 gap-1">
            <ShoppingCartIcon className="h-8 w-8" />
            <span className="absolute top-3 bg-red-500 text-white w-4 h-4 flex items-center justify-center rounded-full text-xs">
              3 {/* Replace with your actual product count */}
            </span>
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
