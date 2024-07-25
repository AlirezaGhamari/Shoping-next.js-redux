import React from 'react'
import Navbar from '@/components/Navbar/Navbar'

function layout({children,notifaction,users}:{children:React.ReactNode,notifaction:React.ReactNode,users:React.ReactNode}) {

  return (
    <div className=' w-full h-screen'>
      <Navbar/>
      {children}
      {notifaction}
      {users}
    </div>
  )
}

export default layout
