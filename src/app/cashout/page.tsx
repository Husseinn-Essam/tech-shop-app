"use client";
import { CashOutForm } from "@/components/CashOutForm";
import { ItemsToCashOut } from "@/components/ItemsToCashOut";
import React, { useState } from "react";

function Cashout() {
  return (
    <>
      <div className="cash-out-container ">
        <CashOutForm />
        <ItemsToCashOut />
      </div>
    </>
  );
}

export default Cashout;

{
  /* <div className="w-full md:w-1/2 p-4 mt-4 md:mt-0 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Cart Items</h2>
        <div className="flex flex-col gap-2">
          {user?.data?.cart?.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <p>
                {item.quantity} of {item.name}
              </p>
              <p>EGP{item.price.toFixed(2)} </p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <p className="text-xl font-semibold">
            Total:{" "}
            {user?.data?.cart
              ?.reduce((total, item) => {
                return total + item.price * item.quantity;
              }, 0)
              ?.toFixed(2) || "0.00"}{" "}
            EGP
          </p>
        </div>
      </div>
    </div>
  ); */
}
