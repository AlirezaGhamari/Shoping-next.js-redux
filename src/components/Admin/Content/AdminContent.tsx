"use client";
import React from "react";
import { useAppSelector } from "@/lib/hook";
import Login from "@/components/login/Login";
import AddProducts from "../Sidebar/SidebarItems/ItemItems/productsItems/Items/AddProducts";

function AdminContent() {
  const showName = useAppSelector((state) => state.contentPageState.idPage);
  return (
    <div className=" w-full h-full flex justify-center items-center">
      {showName=="AddProducts" ? <AddProducts /> : ""}
      {showName=="Login" ? <Login /> : ""}
    </div>
  );
}

export default AdminContent;
