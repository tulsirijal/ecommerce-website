import React from "react";
import { removeFromCart,addToCart } from "../redux/slice/cartItemSlice";
import { useDispatch, useSelector } from "react-redux";
import {MdDelete} from 'react-icons/md'
function CartItemProduct({item,index}) {
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cartItem);
    function handleRemove(post) {
        dispatch(removeFromCart(post));
    }
    
  return (
    <div>
      <div key={index}>
        <div
          className={`w-11/12 max-w-[700px] flex flex-col md:flex-row gap-5 items-center p-3 ${
            cartItems.length > 1 && "border-b-2 border-black"
          }`}
        >
          <img className="w-[30%]" src={item.image}></img>
          <div className="flex flex-col gap-3">
            <p className="font-bold text-xl text-slate-700">{item.title}</p>
            <p className="font-medium text-base">{item.description}</p>
            <div className="flex  justify-between items-center">
              <p className="text-green-600 font-bold text-lg">${item.price}</p>
              <div className="flex gap-2">
                <button
                  className=" w-10 h-10 flex justify-center items-center rounded-full bg-red-200 hover:bg-red-400"
                  onClick={() => handleRemove(item)}
                >
                  <MdDelete />
                </button>
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="border h-10 w-10 rounded-full"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItemProduct;
