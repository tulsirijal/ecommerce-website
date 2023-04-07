import React from "react";
import { NavLink } from "react-router-dom";
function EmptyCart() {
  return (
    <div className="h-[100vh]  flex flex-col gap-y-3 justify-center items-center ">
      
        <p className="text-lg font-semibold">Your Cart is Empty</p>
        <NavLink to="/">
          <button className="text-white px-4  py-2 rounded-md bg-green-500 hover:bg-green-600 duration-150 transition-all">Shop Now</button>
        </NavLink>
      
    </div>
  );
}

export default EmptyCart;
