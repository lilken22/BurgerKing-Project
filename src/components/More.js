import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

export default function More({setDisplayMore}) {

  const [displayMore] = useState({
    displayMore: ''
  })

  function updateMore() {

    setDisplayMore(true)
  }
  console.log(updateMore)

  return (
    <div className='bg-inherit w-[200px] h-[400] fixed top-[60px] left-[20%] overflow-y-scroll pl-5 pb-3 shadow-2xl'>
      <div className=''>
        <button onClick={() => setDisplayMore(false)} className='font-extrabold text-[20px] text-[rgb(248,193,173)] bg-[rgb(214,35,0)] absolute left-0 mb-4'><AiOutlineClose /></button>
      </div>
        <ul className='text-[rgb(105,46,43)] mt-10 mb-2 text-[15px] font-bold ' value={displayMore.name} name='displayMore'>
          <li className='hover:underline'><a href='/'>About BK</a></li>
          <li className='hover:underline'><a href='menu'>YourBurgerKing</a></li>
          <li className='hover:underline'>Responsible Business</li>
          <li className='hover:underline'>Locations</li>
          <li className='hover:underline'>Nutrition Explorer</li>
          <li className='hover:underline'>FAQs</li>
          <li className='hover:underline'>Allergen Info</li>
          <li className='hover:underline'>Terms & Conditions</li>
          <li className='hover:underline'>Animal Welfare Policy</li>
          <li className='hover:underline'>Gender Pay Gap</li>
          <li className='hover:underline'>Corporate Policies</li>
          <li className='hover:underline'>Get in touch</li>
        </ul>
        
        <div className='w-[90%] h-[0.5px]'></div>
        <hr />
        <ul className='text-[rgb(105,46,43)] text-[15px] font-bold'>
          <li className='hover:underline'>Careers</li>
          <li className='hover:underline'>Privacy & Cookies Policy</li>
          <li className='hover:underline'>Tax Strategy</li>
        </ul>
    </div>
  )
}