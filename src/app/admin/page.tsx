"use client";

import AdminPage from "@/components/Admin/AdminPage";
import React from "react";

function page() {
  const tokenPresent = document.cookie.includes("token=");

  return (
    <>
      {tokenPresent ? (
        <div className="h-full">
          <AdminPage />
        </div>
      ) : "please log in"}
    </>
  );
}

export default page;
