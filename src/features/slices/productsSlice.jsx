import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts: "",
  },

  reducers: {
    filteredProducts(state, action) {

    }
  }
});

export const { filteredProducts } = productsSlice.actions;
export default productsSlice.reducer;