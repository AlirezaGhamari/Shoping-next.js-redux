import Image from "next/image";
import React from "react";
import image from "@/public/images/Admin/Profile User Round White Icon Symbol PNG.jpeg";
function SpecificationsImage() {
  return (
    <div className="bg-white h-[60px] w-[60px] rounded-full p-1">
      <Image src={image} alt="aa" objectFit="cover" className="rounded-full" />
    </div>
  );
}

export default SpecificationsImage;
