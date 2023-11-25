import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checked: false,
  light: false,
};

const DarkSlice = createSlice({
  name: "dark",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.checked = !state.checked;
      state.light = !state.light;
    },
  },
});

export default DarkSlice.reducer;
export const { toggleDarkMode } = DarkSlice.actions;
export const currentLightTheme = (state) => state.dark;
