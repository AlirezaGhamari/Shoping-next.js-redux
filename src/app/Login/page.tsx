import Login from '@/components/login/Login'
import React from 'react'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Login page',
  description: 'Login for user ',
}


function page() {
  return (
    <div className='' >
      <Login/>
    </div>
  )
}

export default page
