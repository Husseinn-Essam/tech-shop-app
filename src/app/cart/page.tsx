"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getUser, changeItemQuantity } from "@/services/userServices";
import Cart from "@/components/Cart";
import User from "@/models/User";
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
  const user = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      if (session?.user?._doc?._id) {
        return getUser(session.user._doc._id);
      }
      return null;
    },
    suspense: true,
    staleTime: 5 * 1000,
  });

  return (
    <div className="cart mt-4 p-3 flex flex-col overflow-scroll">
      <h2 className="text-xl font-semibold mb-2 text-white">Your Cart</h2>
      <table className="  border-collapse table-fixed w-full table ">
        <thead>
          <tr className="bg-secondary text-white text-lg">
            <th className="py-2 px-4 text-left">Product Name</th>
            <th className="py-2 px-4 text-center">Quantity</th>
            <th className="py-2 px-4 text-left">Price</th>
          </tr>
        </thead>
        {session ? <Cart /> : ""}
      </table>
      {user?.data?.cart.length > 0 ? (
        <button
          onClick={() => router.push("/cashout")}
          className="self-center px-4 py-2 w-60 mt-2 mx-auto btn btn-secondary text-white "
        >
          Cash Out
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default CartPage;
