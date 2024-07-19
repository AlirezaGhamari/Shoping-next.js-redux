import React from "react";
import AdminSidebar from "./Sidebar/AdminSidebar";
import AdminContent from "./Content/AdminContent";

function AdminPage() {
  return (
    <div className="grid grid-cols-10  ">
      <div className="col-span-2 bg-[#2a3f54] h-screen text-white">
        <AdminSidebar />
      </div>
      <div className=" col-span-8 bg-blue-200 h-screen">
        <AdminContent />
      </div>
    </div>
  );
}

export default AdminPage;
