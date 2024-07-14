"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { plusCounterAction } from "@/lib/slices/counterSlice";
import React from "react";

function page() {
  const dispatch = useAppDispatch();
  const counter = useAppSelector(state=>state.counterState.counter)
  return (
    <div>
        <p className="text-black">{counter}</p>
      <button
        className="p-2 bg-red-600 rounded-lg"
        onClick={() => {
          dispatch(plusCounterAction());
        }}
      >
        plus
      </button>
    </div>
  );
}

export default page;
