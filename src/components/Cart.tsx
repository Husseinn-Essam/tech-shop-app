"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsers, getUser } from "@/services/userServices";
import { useSession } from "next-auth/react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/20/solid";

const Cart: React.FC = () => {
  const { data: session } = useSession();
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
    <tbody>
      {user.data.cart?.map((item) => (
        <tr key={item._id} className="border-b">
          <td className="py-2 px-4">{item.name}</td>
          <td className="py-2 px-4 flex gap-2 justify-center text-2xl">
            <button className="px-2 py-1">
              <MinusCircleIcon className="h-6 w-6" />
            </button>
            <p className="text-xl"> {item.quantity}</p>

            <button className="px-2 py-1 ">
              <PlusCircleIcon className="w-6 h-6" />
            </button>
          </td>
          <td className="py-2 px-4">EGP{item.price.toFixed(2)}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default Cart;
