"use client"
import AdminPage from "@/components/Admin/AdminPage";
import Error from "@/components/Error";
import { useRouter } from "next/navigation";
import React from "react";

function Page() {
  const tokenPresent = document.cookie.includes("token=");
  const router = useRouter();

  return (
    <>
      {tokenPresent ? (
        <div className="h-full">
          <AdminPage />
        </div>
      ) : (
        <Error errorText="please login" onclick={() => router.replace("/login")} />
      )}
    </>
  );
}

export default Page;
