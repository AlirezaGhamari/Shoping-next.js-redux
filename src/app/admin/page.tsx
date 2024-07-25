"use client";

import AdminPage from "@/components/Admin/AdminPage";
import Error from "@/components/Error";
import { useRouter } from "next/navigation";
import React from "react";

function page() {
  const tokenPresent = document.cookie.includes("token=");
  const router = useRouter();

  return (
    <>
      {tokenPresent ? (
        <div className="h-full">
          <AdminPage />
        </div>
      ) : (
        <Error errorText="please login" onclick={() => router.push("/login")} />
      )}
    </>
  );
}

export default page;
