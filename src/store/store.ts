import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "./shoppingCartSlice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: { shoppingCart: shoppingCartReducer },
});
