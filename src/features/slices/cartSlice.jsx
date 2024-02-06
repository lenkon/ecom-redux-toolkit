import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice ({
  name: "cart",
  initialState: {
    cart: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    
  }
});