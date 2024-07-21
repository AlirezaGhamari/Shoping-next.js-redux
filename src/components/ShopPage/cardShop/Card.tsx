import React from "react";

const Card = ({
  price,
  title,
  images,
  category,
}: {
  title: string;
  price: string;
  images: string;
  category: string;
}) => {
  return (
    <div className="bg-white h-[500px] w-[100%] p-2 cursor-pointer  hover:transition-colors hover:duration-300 hover:bg-[#2a3f54] hover:text-white ">
      <div className="bg-white w-[100%] h-[80%] flex justify-center items-center">
        <img src={images} alt="image" />
      </div>
      <div className="font-bold w-full ">{title}</div>
      <div className=" text-[12px] text-slate-500">{category}</div>
      <div className="text-[18px] ">{price}</div>
    </div>
  );
};

export default Card;
