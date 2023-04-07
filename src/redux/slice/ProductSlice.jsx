import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://fakestoreapi.com/products";

export const getItems = createAsyncThunk("cart/getCartItems", () => {
  return fetch(API_URL)
    .then((response) => response.json())
    .catch((err) => console.log(err));
});
const initialState = {
  products: [],
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
        state.products = action.payload
    })
  }
})
export default productSlice.reducer;
