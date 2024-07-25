import Link from 'next/link'
import React from 'react'

function notFound() {
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col gap-2'>
      <p className='text-slate-700 text-[30px]'> This page could not be found .</p>
      <li className="hover:text-[#ff4955]  hover:-translate-y-1 hover:scale-110 hover: duration-300 cursor-pointer list-none rounded-lg border-2 p-1">
          <Link href={"/home"}>HOME</Link>
        </li>
    </div>
  )
}

export default notFound
