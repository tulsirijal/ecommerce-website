import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://fakestoreapi.com/products";

export const getItems = createAsyncThunk("cart/getCartItems", () => {
  return fetch(API_URL)
    .then((response) => response.json())
    .catch((err) => console.log(err));
});
const initialState = {
  cartItems: [],
  quantity:0,
  amount: 0,
  total: 0,
  isLoading: false,
};
export const productSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
  }, 
  extraReducers: builder => {
    builder.addCase(getItems.fulfilled, (state, action) => {
        console.log(action)
        state.cartItems = action.payload
    })
  }
})
export const {} = productSlice.actions;
export default productSlice.reducer;
