import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface productsState {
  message: string;
  listProducts: [];
}

const initialState: productsState = {
  message: "",
  listProducts: [],
};
export const getProducts = createAsyncThunk("docs/products", async () => {
  try {
    const res = await axios.get("https://dummyjson.com/products");
    return res.data.products;
  } catch (error: any) {
    return error;
  }
});
export const addProducts = createAsyncThunk(
  "docs/products",
  async (
    {
      title,
      price,
      category,
    }: { title: string; price: string; category: string },
    { dispatch }
  ) => {
    try {
      let body = {
        category: category,
        title: title,
        price: price,
      };
      const res = await axios.post("https://dummyjson.com/products/add", body);
      dispatch(getProducts());
      return res.data.products;
    } catch (error: any) {
      return error;
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /***********auth*************/
      .addCase(getProducts.pending, (state) => {
        state.message = "loading";
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.message = "fulfilled";
        state.listProducts = payload;
      })
      .addCase(getProducts.rejected, (state, { payload }: any) => {
        state.message = "error";
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = productsSlice.actions;

export default productsSlice.reducer;
