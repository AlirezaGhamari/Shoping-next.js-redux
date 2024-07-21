import React from 'react'
import HeaderShop from '@/components/ShopPage/Header/HeaderShop'
import Navbar from '@/components/Navbar/Navbar'

function layout({children}:{children:React.ReactNode}) {

  return (
    <div className=' w-full h-screen'>
      <Navbar/>
      <HeaderShop/>
      {children}
    </div>
  )
}

export default layout
