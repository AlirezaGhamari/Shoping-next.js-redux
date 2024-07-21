import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios  from "axios";

export interface LoginState {
  token: string;
  message: string;
}

const initialState: LoginState = {
  token: "",
  message: "",
};
export const auth = createAsyncThunk(
    "user/login",
    async ({username,password}:{username:string,password:string}, { rejectWithValue }) => {
      try {
        let body = {
          username: username,
          password: password,
        };
        const res = await axios.post('https://dummyjson.com/user/login', body);
        return res.data;
      } catch (error: any) {
        return rejectWithValue(error.response.data);
      }
    }
  );
  

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      /***********auth*************/
      .addCase(auth.pending, (state) => {
        state.message = "loading";
      })
      .addCase(auth.fulfilled, (state, { payload }) => {
        state.message = "fulfilled";
        state.token=payload.token

      })
      .addCase(auth.rejected, (state, { payload }: any) => {
        state.message = "error";
      });
  },

});

// Action creators are generated for each case reducer function
export const {} = loginSlice.actions;

export default loginSlice.reducer;
