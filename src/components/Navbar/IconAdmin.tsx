import Link from "next/link";
import React from "react";
import { FiUser } from "react-icons/fi";

function IconAdmin() {
  return (
    <div>
      <Link href={"/login"}>
        <FiUser className="w-[25px] h-[25px] hover:text-[#ff4955] hover:-translate-y-1 hover:scale-110 hover: duration-300" />
      </Link>
    </div>
  );
}

export default IconAdmin;
