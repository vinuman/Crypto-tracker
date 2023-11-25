import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currency: "usd",
};

const currenySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    changeCurrency: (state, action) => {
      state.currency = action.payload;
    },
  },
});

export default currenySlice.reducer;
export const { changeCurrency } = currenySlice.actions;
