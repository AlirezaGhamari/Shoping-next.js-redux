"use client";
import React from "react";

function AddProduct() {
  return (
    <div>
      <button
        onClick={() => {
          fetch("https://dummyjson.com/products/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              title: "BMW Pencil",
            }),
          });
        }}
      >
        add
      </button>
    </div>
  );
}

export default AddProduct;
