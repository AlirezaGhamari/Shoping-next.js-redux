import { createSlice } from "@reduxjs/toolkit";

export interface CounterInputState {
  counter: number;
  message: string;
}

const initialState: CounterInputState = {
  counter: 0,
  message: "",
};

export const CounterInputState = createSlice({
  name: "counter",
  initialState,
  reducers: {
    plusCounterAction: (state,payload) => {
      state.counter += payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { plusCounterAction } = counterSlice.actions;

export default counterSlice.reducer;
