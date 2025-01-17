import { ShoppingBag } from "lucide-react";
import React from "react";

const Cart = () => {
  return (
    <div className="border relative bg-red-100 rounded-full p-2">
      <ShoppingBag className="text-red-600" />
      <div className="absolute  -top-2 -right-3 bg-red-600 text-white rounded-full  py-1 px-2 flex items-center justify-center text-xs">
        0
      </div>
    </div>
  );
};

export default Cart;
