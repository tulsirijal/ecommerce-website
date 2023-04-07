import { configureStore } from '@reduxjs/toolkit'
import cartItemSlice  from './cartItemSlice'
import CartSlice from './CartSlice'


export  const store = configureStore({
  reducer: {
    cart: CartSlice,
    cartItem:cartItemSlice
  },
})