import React from 'react'
import Navbarr from '../Landing/Navbarr'
import Boxes from '../Landing/Boxes'
import Picboxchild from "../Landing/Picboxchild";
import Footer from "../Landing/Footer";
// import  list  from '../Landing/List';


export default function Landing() {
  return (
    <main className='h-[100vh]'>
        <Navbarr />
        <Boxes />
        <Picboxchild />
        <Footer />
    </main>
  )
}
