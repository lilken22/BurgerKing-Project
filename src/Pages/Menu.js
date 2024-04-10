import React from 'react'
import  OurMenu  from "../Menu/OurMenu";
import  MenuBox  from "../Menu/MenuBox";
import Footer from '../Landing/Footer';

export default function Menu() {
  
  return (
      <main className= 'h-[80vh]'>
        <OurMenu />
        <MenuBox />
        <Footer />
        {/* <Reusable myList = {MenuList} /> */}
      </main>
    
  );
}
