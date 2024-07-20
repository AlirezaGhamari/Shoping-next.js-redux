import React, { ReactElement } from "react";

interface SidbarItemProps {
  title: string;
  iconDown: ReactElement;
  icon: ReactElement;
  isActive: boolean;
}

const SidbarItem: React.FC<SidbarItemProps> = ({
  title,
  iconDown,
  icon,
  isActive,
}) => {
  return (
    <>
    <div className="flex justify-between items-center p-2 py-4">
      <div className="flex items-center gap-2">
        <div className="text-[18px]">{icon}</div>
        <div className="text-[14px]">{title}</div>
      </div>
      <div>{iconDown}</div>
    </div>

    </>
  );
};

export default SidbarItem;
