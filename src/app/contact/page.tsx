import Navbar from '@/components/Navbar/Navbar';
import React from 'react';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Contact page',
  description: 'about Contact',
}

function page() {
  
  return (
    <>
      <Navbar/>
      <p>Contact</p>
    </>
  );
}

export default page
