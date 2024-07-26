import React, { ChangeEvent } from "react";

interface InputProps {
  type: string;
  value: string | number ;
  onchange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}
function InputComponent({ type, value, onchange, placeholder }: InputProps) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onchange}
        className="w-full rounded-lg bg-[#73879c] outline-[#eca8a4] p-1 text-[15px] placeholder-white placeholder-opacity-60 focus:placeholder:opacity-0"
      />
    </div>
  );
}

export default InputComponent;
