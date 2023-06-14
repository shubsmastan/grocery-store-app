import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data.json";

export type Item = {
  id: number;
  name: string;
  price: number;
  img: string;
};

type CartItem = {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
};

type StoreState = {
  items: CartItem[];
  totalItems: number;
  totalCost: number;
};

const initialState: StoreState = {
  items: [],
  totalItems: 0,
  totalCost: 0,
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    changeItem: (state, { payload }) => {
      const itemInCart = state.items.find((item) => item.id === payload.id);
      if (itemInCart) {
        itemInCart.quantity += payload.quantity;
        return;
      }
      const itemInData: Item = data.find(
        (item) => item.id === payload.id
      ) as Item;
      const itemWithQuantity = { ...itemInData, quantity: 1 };
      state.items = [itemWithQuantity, ...state.items];
    },
    removeItem: (state, { payload }) => {
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
