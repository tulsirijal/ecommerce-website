
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    cartItems: [],
    
}
export const cartItemSlice = createSlice({
    name:'cartItems',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.cartItems.push(action.payload)
            console.log(action.payload)
        },
        removeFromCart:(state,action)=>{
        //    const removed =  state.cartItems.filter(item=>item.id!==action.payload.id)
        //    state.cartItems = removed
        const indexOfItem = state.cartItems.findIndex((item)=>item.id===action.payload.id);
        const newCartItems = [...state.cartItems]
        if(indexOfItem>=0){
            newCartItems.splice(indexOfItem,1)
        }
        state.cartItems = newCartItems
    }
    }
})
export default cartItemSlice.reducer
export const {addToCart,removeFromCart} = cartItemSlice.actions