"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import ProductType from "@/types/ProductType";
import CartProductNumber from "./CartProductNumber";
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
  // Conditionally render the loading screen
  const router = useRouter();
  if (status === "loading") {
    return (
      <>
        <p className="text-white">Loading</p>
      </>
    );
  }

  return (
    <>
      {!session ? (
        <div className="flex flex-col gap-2 w-20">
          <button
            onClick={() => router.push("/register")}
           
          >
            Sign Up
          </button>
          <button
            onClick={() => router.push("/login")}
          >
            Log In
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-6 items-center text-lg w-72">
       
         
          <button
           
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
