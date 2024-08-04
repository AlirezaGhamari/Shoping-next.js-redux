"use client";
import React from "react";
import LoginImage from "./LoginImage";
import LoginForm from "./loginForm/LoginForm";
import { ToastContainer } from "react-toastify";

function Login() {
  return (
    <>
      <div className=" w-[1000px]  grid grid-cols-10  border border-[#2a3f54]">
        <div className="col-span-6 ">
          <LoginImage />
        </div>
        <div className="col-span-4">
          <LoginForm />
        </div>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default Login;
