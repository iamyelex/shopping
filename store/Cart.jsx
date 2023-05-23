import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { items: [], totalQuantity: 0, totalAmount: 0};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.totalAmount = state.totalAmount + newItem.price;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title
        })
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeFromCart(state, action) {
        const oldItem = action.payload;
        const existingItem = state.items.find(item => item.id === oldItem.id);
        state.totalQuantity--;
        state.totalAmount = state.totalAmount - oldItem.price
        if (existingItem.quantity === 1) {
            state.items = state.items.filter(item => item.id !== oldItem.id)
        }else {
            existingItem.quantity--;
            existingItem.totalPrice = existingItem.totalPrice - existingItem.price
        }
    },
  },
});

export const cartSliceReducer = cartSlice.reducer

export const cartActions = cartSlice.actions;

