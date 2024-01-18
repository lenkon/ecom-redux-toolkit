import { createSlice, configureStore } from '@reduxjs/toolkit'

export const sliderSlice = createSlice({
  name: 'slider',
  initialState: {
    value: 0,
    length: 4,
  },
  reducers: {
    nextSlie() {},
    prevSlide() {},
    dotSlide() {},
  }
});

export const { nextSlie, prevSlide, dotSlide } = sliderSlice.actions;
export default sliderSlice.reducer;