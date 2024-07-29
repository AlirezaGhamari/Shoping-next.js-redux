import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/contentPageSlice";
import loginRed from "./slices/loginSlice"
import productsReducer from "./slices/productsSlice"
import errorReducer from "./slices/errorSlice"
import contentPageReducer from "./slices/contentPageSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      contentPageState: contentPageReducer,
      loginState: loginRed,
      productsState:productsReducer,
      errorState:errorReducer
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
