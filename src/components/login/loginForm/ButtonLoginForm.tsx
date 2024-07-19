import Link from 'next/link'; // Import Link from next/link
import React from "react";

function ButtonLoginForm() {


  return (
    <div>
      <Link href="/admin">
        <p className="bg-[#73879c] text-black p-1 rounded-md hover:text-white text-[15px]" >
          log in
        </p>
      </Link>
    </div>
  );
}

export default ButtonLoginForm;
