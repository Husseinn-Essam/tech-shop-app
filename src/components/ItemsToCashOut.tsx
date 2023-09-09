import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { getUser } from "@/services/userServices";

export const ItemsToCashOut = () => {
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
    <section className="flex bg-white flex-col flex-wrap  ">Items</section>
  );
};
