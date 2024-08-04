import React, { ReactElement } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
interface props {
  title: string;
  icon: ReactElement;
  onClick: () => void;
  children: React.ReactNode;
  open: boolean;
}

const SidbarItem = ({
  title,
  icon,
  onClick,
  children,
  open = false,
}: props) => {
  return (
    <>
      <div
        className="flex justify-between items-center p-2 py-4 cursor-pointer hover:text-white hover:bg-[#263a4f] "
        onClick={onClick}
      >
        <div className="flex items-center gap-2">
          <div className="text-[18px]">{icon}</div>
          <div className="text-[14px]">{title}</div>
        </div>
        <div>{open ? <FaChevronUp /> : <FaChevronDown />}</div>
      </div>
      {open && (
        <div className="bg-[#334d67]  p-2 flex items-center justify-center ">
          <div className="flex flex-col  w-[80%]">{children}</div>
        </div>
      )}
    </>
  );
};

export default SidbarItem;
