import React from "react";

function InputLoginForm() {


  return (
    <div className="flex flex-col gap-3 w-full">
      <div>
        <input
          type="text"
          placeholder="Username"
          className="w-full rounded-lg bg-[#73879c] outline-[#eca8a4] p-1 text-[15px] placeholder-white"
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="password"

          className="w-full rounded-lg bg-[#73879c] outline-[#eca8a4] p-1 text-[15px]  placeholder-white"
        />
      </div>
    </div>
  );
}

export default InputLoginForm;
