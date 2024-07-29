import Navbar from '@/components/Navbar/Navbar'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'About page',
  description: 'about ',
}


function page() {
  return (
    <div>
      <Navbar/>
      about
    </div>
  )
}

export default page
