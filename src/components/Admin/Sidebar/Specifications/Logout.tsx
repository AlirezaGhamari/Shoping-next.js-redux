import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React from "react";
import { BiLogOut } from "react-icons/bi";
import { Tooltip } from "react-tooltip";
function Logout() {
  const router = useRouter();

  const cliclkHandler = () => {
    deleteCookie("token");
    router.push("/home");
  };
  return (
    <button onClick={() => cliclkHandler()} className=" text-red-600" id="but">
      <BiLogOut className="w-[30px] h-[30px]" id="but" />
      <Tooltip anchorSelect="#but">log out</Tooltip>
    </button>
  );
}

export default Logout;
