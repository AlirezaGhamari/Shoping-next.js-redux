import {  createSlice } from "@reduxjs/toolkit";


export interface erroeState {
  message: string;
  errorText:string;
  show:boolean
}

const initialState: erroeState = {
  message: "",
  errorText:"error",
  show:false
};

  
export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {},

});


// Action creators are generated for each case reducer function
export const {} = errorSlice.actions;

export default errorSlice.reducer;
