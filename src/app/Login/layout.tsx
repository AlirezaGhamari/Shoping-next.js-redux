
import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex justify-center items-center w-full h-screen  bg-slate-50'>
      {children}
    </div>
  )
}

export default layout
