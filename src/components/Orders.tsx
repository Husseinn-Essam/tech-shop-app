"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUser, changeItemQuantity } from "@/services/userServices";
import { useSession } from "next-auth/react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/20/solid";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import LoadingScreen from "./LoadingScreen";

const Orders: React.FC = () => {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  const user = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      if (session?.user?._doc?._id) {
        return getUser(session.user._doc._id);
      }
      return null;
    },
    suspense: true,
  });
  if (user.isLoading) {
    return <LoadingScreen />;
  }
  return (
    <tbody>
      {user?.data?.orders?.map((item) => (
        <tr key={item._id} className="border-b">
          <td className="py-2 px-4">{item.id}</td>
          <td className="py-2 px-4 ">{item.date}</td>
          <td className="py-2 px-4 ">{item.totalAmount}</td>
          <td className="py-2 px-4 ">{item.status}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default Orders;
