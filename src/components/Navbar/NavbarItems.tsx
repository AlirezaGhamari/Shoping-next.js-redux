import React from "react";
import Link from "next/link";

function NavbarItems() {
  return (
    <div >
      <ul className="flex gap-x-8">
        <li className="hover:text-[#ff4955]  hover:-translate-y-1 hover:scale-110 hover: duration-300 ">
          <Link href={"/home"}>HOME</Link>
        </li>
        <li className="hover:text-[#ff4955] hover:-translate-y-1 hover:scale-110 hover: duration-300">
          <Link href={"/shopAll"}>SHOP ALL</Link>
        </li>
        <li className="hover:text-[#ff4955] hover:-translate-y-1 hover:scale-110 hover: duration-300">
          <Link href={"/aboutUs"}>ABOUT US</Link>
        </li>
        <li className="hover:text-[#ff4955] hover:-translate-y-1 hover:scale-110 hover: duration-300">
          <Link href={"/contact"}>CONTACT</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavbarItems;
