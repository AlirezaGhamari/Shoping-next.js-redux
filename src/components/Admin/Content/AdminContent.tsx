"use client";
import React from "react";
import AddProducts from "../Sidebar/SidebarItems/sidbarItems/ItemItems/productsItems/Items/AddProducts";
import { useAppSelector } from "@/lib/hook";
import Login from "@/components/login/Login";

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
