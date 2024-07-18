import { useAppSelector } from "@/lib/hook";
import React from "react";

function InputLoginForm() {
  const username = useAppSelector((state) => state.loginState.username);
  const password = useAppSelector((state) => state.loginState.password);


  return (
    <div className="flex flex-col gap-3 w-full">
      <div>
        <input
          type="text"
          className="w-full rounded-lg bg-[#f8d3c8] outline-[#eca8a4] p-1 "
        />
      </div>
      <div>
        <input
          type="password"
          className="w-full rounded-lg bg-[#f8d3c8] outline-[#eca8a4] p-1"
        />
      </div>
    </div>
  );
}

export default InputLoginForm;
