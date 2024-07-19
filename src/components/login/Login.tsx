"use client"
import React from "react";
import LoginImage from "./LoginImage";
import LoginForm from "./loginForm/LoginForm";

function Login() {
  return (
    <div className=" w-[1000px]  grid grid-cols-10  border border-[#2a3f54]">
      <div className="col-span-6 ">
        <LoginImage />
      </div>
      <div className="col-span-4">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
