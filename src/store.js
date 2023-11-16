import { configureStore } from "@reduxjs/toolkit";
import DarkReducer from "./slices/darkModeSlice";

const store = configureStore({
  reducer: {
    dark: DarkReducer,
  },
});

export default store;
