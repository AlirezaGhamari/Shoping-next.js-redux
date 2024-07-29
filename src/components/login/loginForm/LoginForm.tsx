import React from "react";
import InputLoginForm from "./InputLoginForm";

function LoginForm() {
  return (
    <div className=" h-full flex items-center justify-center bg-white">
      <div className=" w-[70%] flex flex-col justify-center items-center gap-3">
        <InputLoginForm />
      </div>
    </div>
  );
}

export default LoginForm;
