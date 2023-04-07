import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import CartItemProduct from "./CartItemProduct";
import Summary from "./Summary";
export default function Cart() {
  const { cartItems } = useSelector((state) => state.cartItem);

  return (
    <div className="mx-auto w-11/12 max-w-[1150px]">
      <div
        className={` flex flex-col md:flex-row justify-center items-center gap-4 my-10`}
      >
        <div className={``}>
          {cartItems.length > 0 ? <div className="flex flex-col gap-y-4">
      
              {cartItems.map((item, index) => {
                return <CartItemProduct key={index} item={item} index={index} />;
              })}
      
          </div> : (
            <EmptyCart />
          )}
        </div>
        <Summary />
      </div>
    </div>
  );
}
