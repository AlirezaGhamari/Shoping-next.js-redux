import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { addProducts } from "@/lib/slices/productsSlice";
import React, { useState } from "react";
import Loading from "../Loading";
import Error from "@/components/Error";
import Succes from "../Succes";

function AddProducts() {
  const [showSucces, setShowSucces] = useState(true);

  const dispatch = useAppDispatch();
  const mesage = useAppSelector((state) => state.productsState.message);
  const [data, setData] = useState({ title: "", price: "", category: "" });
  const clickHandlerError = () => {
    setShowSucces(false);
  };

  return (
    <div className="flex flex-col gap-2 justify-center items-center w-[50%] h-[50%] bg-[#adcff9] rounded-lg">
      <h1 className="font-bold text-[40px] text-[#2a3f54]">Add Product</h1>

      <div className="w-[50%]">
        <input
          type="text"
          placeholder="Category"
          value={data.category}
          onChange={(e) => setData({ ...data, category: e.target.value })}
          className="w-full rounded-lg bg-[#73879c] outline-[#eca8a4] p-1 text-[15px] placeholder-white placeholder-opacity-60 focus:placeholder:opacity-0"
        />
      </div>
      <div className="w-[50%]">
        <input
          type="text"
          placeholder="Title"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
          className="w-full rounded-lg bg-[#73879c] outline-[#eca8a4] p-1 text-[15px] placeholder-white placeholder-opacity-60 focus:placeholder:opacity-0"
        />
      </div>
      <div className="w-[50%]">
        <input
          type="text"
          placeholder="Price"
          value={data.price}
          onChange={(e) => setData({ ...data, price: e.target.value })}
          className="w-full rounded-lg bg-[#73879c] outline-[#eca8a4] p-1 text-[15px] placeholder-white placeholder-opacity-60 focus:placeholder:opacity-0"
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
      {mesage === "fulfilled" && showSucces === true ? (
        <Succes succesText="Product Added" onclick={() => clickHandlerError()} />
      ) : (
        ""
      )}



    </div>
  );
}

export default AddProducts;
