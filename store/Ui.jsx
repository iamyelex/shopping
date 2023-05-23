import { createSlice } from "@reduxjs/toolkit";

const initialUiState = { isCartVisible: false };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    toggleCart (state) {
        state.isCartVisible = !state.isCartVisible;
    }
  }
});

export const uiSliceReducers = uiSlice.reducer
export const uiActions = uiSlice.actions
