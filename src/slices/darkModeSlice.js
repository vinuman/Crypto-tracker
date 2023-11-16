import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const DarkSlice = createSlice({
  name: "dark",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      return !state;
    },
  },
});

export default DarkSlice.reducer;
export const { toggleDarkMode } = DarkSlice.actions;
export const currentLightTheme = (state) => state.dark;
