import React from "react";
interface SidbarItemProps {
  title: string;
  iconDown: string;
  icon:string
}

const SidbarItem: React.FC<SidbarItemProps> = ({ title ,iconDown,icon}) => {
  return (
    <div className=" flex justify-between items-center p-2 py-4 ">
      <div className="flex items-center gap-2 ">
        <div className="text-[18px]">
        {icon}   
        </div>
        <div className="text-[14px]">

        {title}
        </div>
        </div>
      <div>{iconDown}</div>
    </div>
  );
};

export default SidbarItem;
