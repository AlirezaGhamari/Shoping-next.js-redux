import React from "react";
interface PriceCardsProps {
  price: string | number;
}

const PriceCards: React.FC<PriceCardsProps> = ({ price }) => {
  return <div className="text-[18px] text-black">{price}</div>;
};

export default PriceCards;
