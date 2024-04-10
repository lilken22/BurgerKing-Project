import React from 'react'
import { AiOutlineClose } from "react-icons/ai"; 

export default function Modal({setDisplayModal}) {
  return (
    <section className='backdrop-blur-sm h-screen w-full fixed top-0 left-0  z-50 flex items-center justify-center'>
        <div className='w-[400px] h-[400px] bg-white rounded-md shadow-2xl'>
           <button onClick={() => setDisplayModal(false)}><AiOutlineClose /></button>
           <h2 className='text center'>Notification</h2>
        </div>
    </section>
   
  )
}