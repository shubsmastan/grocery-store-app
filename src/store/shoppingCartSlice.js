import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data.json";

const initialState = {
  items: [],
  totalItems: 0,
  totalCost: 0,
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    changeItem: (state, { payload }) => {
      if (state.items.find((item) => item.id === payload.id)) {
        let item = state.items.find((item) => item.id === payload.id);
        item.quantity += payload.quantity;
        return;
      }
      let item = data.find((item) => item.id === payload.id);
      item = { ...item, quantity: 1 };
      state.items = [item, ...state.items];
    },
    removeItem: (state, { payload }) => {
      let item = state.items.find((item) => item.id === payload);
      state.items = state.items.filter((item) => item.id !== payload);
    },
    clearItems: (state) => {
      state.items = [];
    },
    calculateTotals: (state) => {
      let quantity = 0;
      let cost = 0;
      state.items.forEach((item) => {
        quantity += item.quantity;
        cost += item.quantity * item.price;
      });
      state.totalItems = quantity;
      state.totalCost = cost;
    },
  },
});

export const { changeItem, removeItem, clearItems, calculateTotals } =
  shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
