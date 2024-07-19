import React from "react";
import ImageCard from "./card/ImageCard";
import TitleCards from "./card/TitleCards";
import PriceCards from "./card/PriceCards";
import CategoryCards from "./card/CategoryCards";
interface CardProps {
  price: number | string;
  title: string;
  images: string;
  category: string;
}

const Card: React.FC<CardProps> = ({ price, title, images, category }) => {
  return (
    <div className="bg-white h-[500px] w-[100%] p-2 cursor-pointer  hover:transition-colors hover:duration-300 hover:bg-[#2a3f54] hover:text-white ">
        <ImageCard images={images} />
        <TitleCards title={title} />
        <CategoryCards category={category} />
        <PriceCards price={price} />
    </div>
  );
};

export default Card;
