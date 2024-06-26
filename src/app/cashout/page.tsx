"use client";
import { CashOutForm } from "@/components/CashOutForm";
import { ItemsToCashOut } from "@/components/ItemsToCashOut";
import React, { useState } from "react";

function Cashout() {
  return (
    <>
      <div data-theme='mytheme' className="cash-out-container   ">
        <CashOutForm />
        <ItemsToCashOut />
      </div>
    </>
  );
}

export default Cashout;

{
}
