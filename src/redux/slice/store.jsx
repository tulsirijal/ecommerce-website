import { configureStore } from '@reduxjs/toolkit'
import cartItemSlice  from './cartItemSlice'
import CartSlice from './ProductSlice'


export  const store = configureStore({
  reducer: {
    cart: CartSlice,
    cartItem:cartItemSlice
  },
})