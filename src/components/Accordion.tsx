"use client";
import React, { useState } from "react";
import { AccordionItem } from "./AccordionItem";

const Data = [
  {
    title: "aaaaaaaaa",
    content:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
];

export const Accordion = () => {
  const [indexopen, setIndexOpen] = useState<number>(99999);

  const handleClick = (index: number) => {
    setIndexOpen(index === indexopen ? 9999 : index);
  };


  return (
    <section className="flex w-full max-w-[375px] flex-col items-center rounded-lg bg-white p-6 shadow-xl lg:max-w-[600px] lg:p-10">
      <div className="flex w-full items-center justify-start gap-[24px] pb-6 lg:pb-0"></div>
      {Data.map((item, index) => (
        <>
          <AccordionItem
            key={item.title}
            open={index === indexopen}
            title={item.title}
            onClick={() => handleClick(index)}
          >
            {item.content}
          </AccordionItem>
        </>
      ))}
    </section>
  );
};
