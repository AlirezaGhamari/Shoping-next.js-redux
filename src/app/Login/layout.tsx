
import React from 'react'
import { ToastContainer } from 'react-toastify'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex justify-center items-center w-full h-screen  bg-[#73879c]'>
      <ToastContainer
position="bottom-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss={false}
draggable
pauseOnHover
theme="colored"
/>
      {children}
    </div>
  )
}

export default layout
