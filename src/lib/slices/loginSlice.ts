import { createSlice } from "@reduxjs/toolkit";
interface loginState {
    username:number|string
    password:number|string

}
const initialState: loginState = {
  username:"" ,
  password: "",
};

export const loginState = createSlice({
  name: "counter",
  initialState,
  reducers: {
    loginStateAction: (user,pass) => {
        fetch('https://dummyjson.com/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              
              username: {user},
              password: {pass}
            })
          })
          .then(res => res.json())

    },
  },
});

// Action creators are generated for each case reducer function
export const { loginStateAction } = loginState.actions;

export default loginState.reducer;
