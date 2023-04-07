import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  const { cartItems } = useSelector((state) => state.cartItem);
  return (
    <nav className=" bg-slate-900 mb-5">
      <div className="flex justify-between py-2 items-center w-11/12 max-w-[72rem] mx-auto">
        <NavLink to="/">
          <img
            src="https://codehelp-shopping-cart.netlify.app/logo.png"
            className="max-w-[170px]"
          />
        </NavLink>
        <div className="flex gap-x-4 items-center">
          <NavLink to="/">
            <p className="text-white">Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative" >
              <FaShoppingCart size="1.2rem" className="text-white" />
              {cartItems.length>0&&<div className="absolute  h-5 w-5 flex justify-center items-center bg-green-600 rounded-full text-white -top-3 -right-2 animate-bounce text-xs">
                {cartItems.length > 0&& cartItems.length}
              </div>}
            </div>
            
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
