import React, { useState } from "react";
import SidbarItem from "./SidbarItem";
import { IoHome } from "react-icons/io5";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BsTable } from "react-icons/bs";
import ProductsItems from "./ItemItems/productsItems/ProductsItems";

const SidbarItems = () => {
  const data: any[] = [
    { title: "Home", icon: <IoHome />, content: "ddddd" },
    {
      title: "Products",
      icon: <MdProductionQuantityLimits />,
      content: <ProductsItems />,
    },
    { title: "Tables", icon: <BsTable />, content: "ddd" },
  ];
  const [indexopen, setIndexOpen] = useState<number>(9999);

  const handleClick = (index: number) => {
    setIndexOpen(index === indexopen ? 9999 : index);
  };

  return (
    <div className="text-[#e0e2e3]">
      {data.map((i: any, index: number) => (
        <>
          <SidbarItem
            key={index}
            title={i.title}
            icon={i.icon}
            open={index === indexopen}
            onClick={() => handleClick(index)}
          >
            {i.content}
          </SidbarItem>
        </>
      ))}
    </div>
  );
};

export default SidbarItems;
