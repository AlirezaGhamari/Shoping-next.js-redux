import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  counter: number;
  message: string;
}

const initialState: CounterState = {
  counter: 0,
  message: "",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    plusCounterAction: (state) => {
      state.counter++;
    },
  },
});

// Action creators are generated for each case reducer function
export const { plusCounterAction } = counterSlice.actions;

export default counterSlice.reducer;
