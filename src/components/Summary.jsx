import React from 'react'
import {useSelector} from 'react-redux'
function Summary() {
    const {cartItems}= useSelector((state)=>state.cartItem)
    const totalAmount = cartItems.reduce((acc,item)=>acc + item.price , 0)
    
  return (
    <div className='self-start'>
         {cartItems.length > 0 && (
        <div className="self-start flex flex-col gap-y-1">
          <p className="text-3xl text-green-700 font-bold">Your Cart</p>
          <p className="font-extrabold text-4xl text-green-800 uppercase">
            Summary
          </p>
          <p className="font-bold">
            <span className="font-bold text-lg">Total Items</span> :{" "}
            {cartItems.length}
          </p>
          <p className="font-bold">
            <span className="font-bold text-lg">Total Amount</span> : $
            {totalAmount.toFixed(2)}
          </p>
          <button className="bg-green-600 text-lg font-bold hover:bg-green-800 px-4 py-2 rounded-md text-white">Checkout Now</button>
        </div>
      )}
    </div>
  )
}

export default Summary