"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import { redirect, useRouter } from "next/navigation";
import ProductType from "@/types/ProductType";
import { useQuery } from "@tanstack/react-query";
import { getUsers, getUser } from "@/services/userServices";
import CartProductNumber from "./CartProductNumber";
import LoadingScreen from "./LoadingScreen";
interface userData {
  role: string;
  _id: string;
  username: string;
  email: string;
  password: string;
  cart: ProductType[];
}
interface navLinkProps {
  mobileLinks: boolean;
}
const UserStatus: React.FC<navLinkProps> = ({ mobileLinks }) => {
  const { data: session, status } = useSession();
  // Conditionally render the loading screen
  const router = useRouter();
  if (status === "loading") {
    return (
      <>
        <p className="text-white">Loading</p>
      </>
    );
  }
  if (mobileLinks) {
    return (
      <>
        {!session ? (
          <div className="flex flex-col mt-5 gap-2">
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
          <>
            <div className="flex flex-col mt-4 gap-4 items-center text-lg">
              <button
                onClick={() => router.push("/cart")}
                className="flex flex-row relative mr-4 gap-1"
              >
                <ShoppingCartIcon className="h-8 w-8" />
                <span className=" absolute top-3 bg-red-500 text-white w-5 h-4 flex items-center justify-center rounded-full text-xs">
                  {session.user ? <CartProductNumber /> : ""}
                </span>
                My Cart
              </button>

              <button
                className="text-slate-800 bg-white p-2 rounded font-sans font-bold"
                onClick={() => {
                  signOut({ callbackUrl: "/" });
                }}
              >
                Sign Out
              </button>
            </div>
          </>
        )}
      </>
    );
  }
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
          <button
            onClick={() => router.push("/cart")}
            className="flex flex-row relative mr-4 gap-1"
          >
            <ShoppingCartIcon className="h-8 w-8" />
            <span className=" absolute top-3 bg-red-500 text-white w-5 h-4 flex items-center justify-center rounded-full text-xs">
              {session.user ? <CartProductNumber /> : ""}
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
