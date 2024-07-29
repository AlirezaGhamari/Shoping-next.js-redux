import { createSlice } from "@reduxjs/toolkit";

export interface contentPageState {
  idPage: string;
}

const initialState: contentPageState = {
  idPage: "",
};

export const contentPageSlice = createSlice({
  name: "contentPage",
  initialState,
  reducers: {
    showContant: (state, action) => {
      state.idPage = action.payload; 
    },
  },
});

// Action creators are generated for each case reducer function
export const { showContant } = contentPageSlice.actions;

export default contentPageSlice.reducer;
