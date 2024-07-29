import React from "react";
import { ToastContainer } from "react-toastify";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center w-full h-screen  bg-[#73879c]">
      {children}
    </div>
  );
}

export default layout;
