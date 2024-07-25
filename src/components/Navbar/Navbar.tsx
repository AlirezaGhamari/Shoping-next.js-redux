import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarItems from "./NavbarItems";
import NavbarUser from "./NavbarUser";

function Navbar() {

  return (
    <div className="grid grid-cols-10 text-[20px] text-white  bg-[#2a3f54] border ">
      <div className="col-span-2 flex justify-center items-center p-2 ">
        <NavbarLogo />
      </div>
      <div className="col-span-6 flex justify-center items-center  ">
        <NavbarItems />
      </div>
      <div className="col-span-2  flex justify-center items-center">
        <NavbarUser />
      </div>
    </div>
  );
}

export default Navbar;
