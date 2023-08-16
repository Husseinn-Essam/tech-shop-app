import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";

const AddToCartBtn = () => {
  return (
    <button className="add-to-cart-btn absolute hidden group-hover:block">
      {/* Icon */}
      <ShoppingCartIcon className="h-11 w-11" />
    </button>
  );
};

export default AddToCartBtn;
