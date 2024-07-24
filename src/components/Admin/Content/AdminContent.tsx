"use client"
import React from "react";
import AddProducts from "../AddProducts";
import Logout from "./Logout";

function AdminContent() {
  
  return <div className=" w-full h-full flex justify-center items-center">

    <AddProducts/>
    <Logout/>
  </div>;
}

export default AdminContent;
