import Navbar from '@/components/Navbar/Navbar';
import React from 'react';
import type { Metadata } from 'next'
import { Accordion } from '@/components/Accordion';
import { AccordionItem } from '@/components/AccordionItem';
 
export const metadata: Metadata = {
  title: 'Contact page',
  description: 'about Contact',
}

function page() {
  
  return (
    <>
      <Navbar/>
      <p>Contact</p>
      <Accordion/>
    </>
  );
}

export default page
