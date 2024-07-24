import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setCookie } from "cookies-next";
import { toast } from "react-toastify";

export interface LoginState {
  token: string;
  message: string;
  active: boolean;
}

const initialState: LoginState = {
  token: "",
  message: "",
  active: false,
};

export const logoutRed=(state = initialState)=> {
  state.active=false
  }

export const auth = createAsyncThunk(
  "user/login",
  async (
    { username, password }: { username: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      let body = {
        username: username,
        password: password,
      };
      const res = await axios.post("https://dummyjson.com/user/login", body);
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
    const error = () => toast.error("your username or password is wrong");
    const success = () => toast.success("welcome");

    builder
      /***********auth*************/
      .addCase(auth.pending, (state) => {
        state.message = "loading";
      })
      .addCase(auth.fulfilled, (state, { payload }) => {
        state.message = "fulfilled";
        state.token = payload.token;
        state.active = true;
        setCookie("token", payload.token);
        success();
      })
      .addCase(auth.rejected, (state, { payload }: any) => {
        state.message = "error";
        error();
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = loginSlice.actions;

export default loginSlice.reducer;
