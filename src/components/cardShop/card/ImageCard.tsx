import React from "react";
interface ImageCardProps {
  images: any;
}
const ImageCard:React.FC<ImageCardProps> = ({ images }) => {
  return (
    <div className="bg-white w-[100%] h-[80%] flex justify-center items-center">
      <img src={images} alt="image"/>
    </div>
  );
};

export default ImageCard;
