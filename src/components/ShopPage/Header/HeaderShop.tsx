import React from "react";
import bg from "./bg-10.jpg";
import Image from "next/image";

function Header() {
  return (
    <div className="h-[70%] w-full">
      <Image className="h-full" src={bg} alt="image"  />
      
    </div>
  );
}

export default Header;
