import Navbar from '@/components/Navbar/Navbar';
import React from 'react';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Home page',
  description: 'First page',
}


function Page() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default Page;
