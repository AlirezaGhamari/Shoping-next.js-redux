import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  open: boolean;
  onClick: () => void;
};

export const AccordionItem = ({
  title,
  children,
  onClick,
  open = false,
}: Props) => {

  return (
    <article className="w-full select-none">
      <div
        onClick={onClick}
        className="flex cursor-pointer items-center justify-between gap-[24px] "
      >
        {/* title for accordiom */}
        <h4 className="text-darkPurple font-semibold lg:text-lg">{title}</h4>
        {/* icon for accordiom  */}
        {open ? (
         "o"
        ) : (
          "c"
        )}
      </div>
      {/* more title for accordiom  */}
      {open && (
        <p className="text-palePurple pt-6 text-sm font-normal ">
          {children}
        </p>
      )}
    </article>
  );
};