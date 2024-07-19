import React from "react";
import SidbarItem from "./SidbarItem";
import { FaChevronDown } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BsTable } from "react-icons/bs";

const SidbarItems = () => {
  const data: any[] = [
    { title: "Home", icon: <IoHome />, isActive: false },
    {
      title: "Products",
      icon: <MdProductionQuantityLimits />,
      isActive: false,
    },
    { title: "Tables", icon: <BsTable />, isActive: false },
  ];

  return (
    <div className="text-[#e0e2e3]">
      {data.map((i: any, index: number) => (
        <SidbarItem
          key={index}
          title={i.title}
          icon={i.icon}
          iconDown={<FaChevronDown />}
          isActive={i.isActive}
        />
      ))}
    </div>
  );
};

export default SidbarItems;
