"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Cart from "@/components/Cart";
interface CartItem {
  _id: string;
  name: string;
  price: number;
}

interface CartProps {
  cartItems: CartItem[];
}
const CartPage: React.FC<any> = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="cart mt-4 p-3 flex flex-col">
      <h2 className="text-xl font-semibold mb-2 text-white">Your Cart</h2>
      <table className="w-full border-collapse bg-gray-100">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 text-left">Product Name</th>
            <th className="py-2 px-4 text-center">Quantity</th>
            <th className="py-2 px-4 text-left">Price</th>
          </tr>
        </thead>
        {session ? <Cart /> : ""}
      </table>
      {/* <button className="bg-white text-black mx-auto mt-5 p-5 rounded-lg">
        Cash Out
      </button> */}
      <button
        onClick={() => router.push("/cashout")}
        className="px-4 py-2 w-60 mt-2 mx-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition duration-300 ease-in-out"
      >
        Cash Out
      </button>
    </div>
  );
};

export default CartPage;
