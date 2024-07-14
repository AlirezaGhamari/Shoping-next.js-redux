import React from 'react'
import HeaderShop from '@/components/ShopPage/Header/HeaderShop'

function layout({children}:{children:React.ReactNode}) {
  return (
    <div className=' w-full h-screen'>
      <HeaderShop/>
      {children}
    </div>
  )
}

export default layout
