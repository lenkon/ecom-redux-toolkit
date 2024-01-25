import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts: "",
  },

  reducers: {
    filteredProducts(state, action) {
      try {
        const filter = storeData.filter((product) => product.type === action.payload);
        state.filteredProducts = filter;
        
      } catch (err) {
        return err;
      }
    }
  }
});

export const { filteredProducts } = productsSlice.actions;
export default productsSlice.reducer;