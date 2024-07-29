"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FiUser } from "react-icons/fi";

function IconAdmin() {
  const router = useRouter();

  const clickHandler = () => {
    const tokenPresent = document.cookie.includes("token=");

    tokenPresent ? router?.replace("/admin") : router?.replace("/login");
  };

  return  (
    <div>
      <button onClick={clickHandler}>
        <FiUser className="w-[25px] h-[25px] hover:text-[#ff4955] hover:-translate-y-1 hover:scale-110 hover:duration-300" />
      </button>
    </div>
  ) 
}

export default IconAdmin;
