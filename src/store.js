import { configureStore } from "@reduxjs/toolkit";
import DarkReducer from "./slices/darkModeSlice";
import currencySlice from "./slices/currencySlice";

const store = configureStore({
  reducer: {
    dark: DarkReducer,
    currency: currencySlice,
  },
});

export default store;
