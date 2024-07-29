import InputComponent from "@/components/InputComponent";
import Loading from "@/components/Loading";
import Succes from "@/components/Succes";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { addProducts } from "@/lib/slices/productsSlice";
import React, { useState } from "react";

function AddProducts() {
  const dispatch = useAppDispatch();
  var mesage = useAppSelector((state) => state.productsState.message);
  const [data, setData] = useState({ title: "", price: "", category: "" });

  return (
    <div className="flex flex-col gap-2 justify-center items-center w-[50%] h-[50%] bg-[#adcff9] rounded-lg">
      <h1 className="font-bold text-[40px] text-[#2a3f54]">Add Product</h1>

      <div className="w-[50%]">
        <InputComponent
          type="text"
          placeholder="Category"
          value={data.category}
          onchange={(e) => setData({ ...data, category: e.target.value })}
        />
      </div>
      <div className="w-[50%]">
        <InputComponent
          type="text"
          placeholder="Title"
          value={data.title}
          onchange={(e) => setData({ ...data, title: e.target.value })}
        />
      </div>
      <div className="w-[50%]">
        <InputComponent
          type="text"
          placeholder="Price"
          value={data.price}
          onchange={(e) => setData({ ...data, price: e.target.value })}
        />
      </div>
      <button
        className="bg-[#73879c] text-black p-1 rounded-md hover:text-white text-[15px] w-[20%]"
        onClick={() =>
          dispatch(
            addProducts({
              category: data.category,
              title: data.title,
              price: data.price,
            })
          )
        }
      >
        Add
      </button>

      {mesage === "loading" ? <Loading /> : ""}
      {mesage == "fulfilled" ? <Succes succesText="Product Added" /> : ""}
    </div>
  );
}

export default AddProducts;
