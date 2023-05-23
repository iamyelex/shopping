import { configureStore } from "@reduxjs/toolkit";
import { cartSliceReducer } from "./Cart";
import { uiSliceReducers } from "./Ui";

const store = configureStore({
  reducer: { cart: cartSliceReducer, ui: uiSliceReducers },
});

export default store;
