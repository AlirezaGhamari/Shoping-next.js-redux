import BodyShopPage from '@/components/ShopPage/Body/BodyShopPage'
import React from 'react'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Shoping page',
  description: 'shoping list product',
}


function page() {

  return (
    <div>
      <BodyShopPage/>
    </div>
  )
}

export default page
