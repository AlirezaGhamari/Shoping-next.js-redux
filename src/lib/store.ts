import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../lib/slices/counterSlice";
import loginRed from "./slices/loginSlice"
import productsReducer from "./slices/productsSlice"
export const makeStore = () => {
  return configureStore({
    reducer: {
      counterState: counterReducer,
      loginState: loginRed,
      productsState:productsReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
