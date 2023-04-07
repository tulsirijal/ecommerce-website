import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slice/cartItemSlice";
export default function Product({ post }) {
  const dispatch = useDispatch();

  const title = post.title;
  const description = post.description.substring(0, 55);
  const { cartItems } = useSelector((state) => state.cartItem);
  function handleSelected() {
    setSelected((prev) => !prev);
  }
  function handleAdd() {
    dispatch(addToCart(post));
  }
  function handleRemove() {
    dispatch(removeFromCart(post));
  }
  return (
    <div className="flex flex-col w-[90%] gap-3 p-3  justify-center items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] lg:hover:shadow-[0px_0px_95px_53px_#00000024] rounded-xl  mt-10 lg:hover:scale-110 transition-all duration-300 ease-in">
      <h1 className="font-semibold text-lg w-40 truncate">{title}...</h1>
      <div>
        <p className="w-40 truncate text-[10px] text-left text-gray-400 font-normal">
          {description}...
        </p>
      </div>
      <img src={post.image} className="object-contain  h-[180px]" />
      <div className="flex items-center gap-14">
        <p className="font-semibold text-green-600 ">${post.price}</p>
        <div>
          {cartItems.find((item) => item.id === post.id) ? (
            <button
              onClick={handleRemove}
              className="  px-3 py-2 rounded-2xl border-[2px] border-gray-700 text-[12px] hover:text-white hover:bg-gray-700 duration-150 transition-all font-semibold"
            >
              Remove item
            </button>
          ) : (
            <button
              onClick={handleAdd}
              className="  px-3 py-2 rounded-2xl border-[2px] border-gray-700 text-[12px] hover:text-white hover:bg-gray-700 duration-150 transition-all font-semibold"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
