import React from "react";
interface PriceCardsProps {
  price: string | number;
}

const PriceCards: React.FC<PriceCardsProps> = ({ price }) => {
  return <div className="text-[18px] text-[#ff4955]">{price}</div>;
};

export default PriceCards;
