"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsers, getUser } from "@/services/userServices";
import { useSession } from "next-auth/react";

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
  console.log(user.data);
  return (
    <tbody>
      {user.data.cart?.map((item) => (
        <tr key={item._id} className="border-b">
          <td className="py-2 px-4">{item.name}</td>
          <td className="py-2 px-4">${item.price.toFixed(2)}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default Cart;
