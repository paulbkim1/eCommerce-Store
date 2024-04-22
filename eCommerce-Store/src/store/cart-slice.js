import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    grandTotal: 0,
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity += newItem.quantity;
      state.grandTotal = parseFloat(
        (state.grandTotal + newItem.quantity * newItem.price).toFixed(2)
      );
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          image: newItem.image,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: parseFloat((newItem.price * newItem.quantity).toFixed(2)),
        });
      } else {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice = parseFloat(
          (existingItem.totalPrice + newItem.price * newItem.quantity).toFixed(
            2
          )
        );
      }
    },
    adjustQuantity(state, action) {
      const newQuantity = action.payload.quantity;
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem.quantity <= 1 && newQuantity === -1) {
        return;
      } else {
        state.totalQuantity += newQuantity;
        state.grandTotal = parseFloat(
          (state.grandTotal + newQuantity * existingItem.price).toFixed(2)
        );

        existingItem.quantity += newQuantity;
        existingItem.totalPrice = parseFloat(
          (existingItem.totalPrice + newQuantity * existingItem.price).toFixed(
            2
          )
        );
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity -= existingItem.quantity;
      state.grandTotal = parseFloat(
        (state.grandTotal - existingItem.totalPrice).toFixed(2)
      );

      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
