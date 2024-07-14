import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen bg-white p-5 flex items-center justify-center">
      {children}
    </div>
  );
}
