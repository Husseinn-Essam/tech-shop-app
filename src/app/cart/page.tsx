"use client";
import React from "react";
import { useSession } from "next-auth/react";
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

  return (
    <div className="cart mt-4 p-3">
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
    </div>
  );
};

export default CartPage;
