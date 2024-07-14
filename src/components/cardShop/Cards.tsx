import React from "react";
import Card from "./Card";
import ProductsApi from "@/config/Api/ProductsApi";

async function Cards() {
  const data = await ProductsApi();

  return (
    <div className="grid grid-cols-4 gap-4 p-5 text-black bg-slate-100">
      {data.map((item: any, index: any) => (
        <Card key={index}
         price={item.price}
          title={item.title}
          images={item.images}
          category={item.category}
           />
      ))}
    </div>
  );
}

export default Cards;
