"use client"
import React, { useEffect } from "react";
import Card from "./Card";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { getProducts } from "@/lib/slices/productsSlice";
import Loading from "@/components/Loading";

 function Cards() {
  const dispatch=useAppDispatch()
  useEffect(() => {
    dispatch(getProducts())
  
  }, [dispatch])
  const data = useAppSelector((state) => state.productsState.listProducts);
  const message= useAppSelector(state=>state.productsState.message)

  

  return (
    <div className="grid grid-cols-4 gap-4 p-5 text-black bg-slate-100">
      {message==="loading" ?  <Loading /> :null}
      {data.map((item:{id:number,title:string,price:string , images:string , category:string}) => (
        <Card 
        key={item.id}
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
