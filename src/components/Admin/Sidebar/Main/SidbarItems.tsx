
import React from "react";
import SidbarItem from "./SidbarItem";
import { FaChevronDown } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BsTable } from "react-icons/bs";

function SidbarItems() {
  const data:any = [ {title:"Home",icon:<IoHome/>}, {title:"Products",icon:<MdProductionQuantityLimits/>},{title:"Tables",icon:<BsTable/>} ];

  return (
    <div className="text-[#e0e2e3] ">
      {data.map((i:any,index:any)=><SidbarItem key={index} title={i.title} icon={i.icon} iconDown={<FaChevronDown/>} />)}
    </div>
  );
}

export default SidbarItems;