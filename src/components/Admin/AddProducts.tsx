import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { addProducts } from "@/lib/slices/productsSlice";
import React, { useState } from "react";
import Loading from "../Loading";
import SuccessModal from "../SuccessModal"

function AddProducts() {
  const dispatch = useAppDispatch();
  const mesage = useAppSelector((state) => state.productsState.message);
  const [data, setData] = useState({ title: "", price: "", category: "" });
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-[50%] h-[50%] bg-[#adcff9] rounded-lg">
      <h1 className="font-bold text-[40px] text-[#2a3f54]">Add Product</h1>

      <div className="w-[50%]">
        <input
          type="text"
          placeholder="Category"
          value={data.category}
          onChange={(e) => setData({ ...data, category: e.target.value })}
          className="w-full rounded-lg bg-[#73879c] outline-[#eca8a4] p-1 text-[15px] placeholder-white focus:placeholder:opacity-0"
        />
      </div>
      <div className="w-[50%]">
        <input
          type="text"
          placeholder="Title"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
          className="w-full rounded-lg bg-[#73879c] outline-[#eca8a4] p-1 text-[15px] placeholder-white focus:placeholder:opacity-0"
        />
      </div>
      <div className="w-[50%]">
        <input
          type="text"
          placeholder="Price"
          value={data.price}
          onChange={(e) => setData({ ...data, price: e.target.value })}
          className="w-full rounded-lg bg-[#73879c] outline-[#eca8a4] p-1 text-[15px] placeholder-white focus:placeholder:opacity-0"
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
      {/* {mesage === "fulfilled" ? <SuccessModal /> : ""} */}


    </div>
  );
}

export default AddProducts;
