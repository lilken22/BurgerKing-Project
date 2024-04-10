import React from 'react'
import { Link } from "react-router-dom"
import { IoGlobeOutline } from "react-icons/io5"
import { FaInstagram } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa"
import { CiYoutube } from "react-icons/ci"
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className='hidden sm:block bg-[rgb(43,2,0)] w-full h-3.0/5 py-10 mt-5 '>
        <div className='flex items-center gap-[30%]'>
            <ul className='text-[rgb(245,235,220)] mt-20 pl-[120px]'>
                <div className='flex'>
                <h1 className='font-extrabold text-3xl'>BK</h1>
                <h6>®</h6>
                <h1 className='font-extrabold text-3xl'>INFO</h1>
                </div>
                <li><Link href='./'>About BK ®</Link></li>
                <li><Link href='./'>FAQs</Link></li>
                <li><Link href='./'>Policies</Link></li>
                <li><Link href='./'>Get in touch</Link></li>
                <li><Link href='./'>Terms & Conditions</Link></li>
                <li><Link href='./'>Guest Track</Link></li>
                <li><Link href='./'>Trademarks</Link></li>
            </ul>

            <ul className='text-[rgb(252,239,219)]'>
                <div className='flex'>
                <h1 className='font-extrabold text-3xl'>BK</h1>
                <h6>®</h6>
                <h1 className='font-extrabold text-3xl'>AND INFO</h1>
                </div>

            <li><Link href='./'>Careers</Link></li>
            <li><Link href='./'>Privacy Policy</Link></li>
            <li><Link href='./'>Modern Slavery Statement</Link></li>
            <li><Link href='./'>Tax Strategy</Link></li>
            </ul>
        </div>

        <input className='w-[84%] h-[1px] ml-[120px] mt-16 text-white'></input>
        <div className='flex justify-between'>
          <div className='text-[rgb(252,239,219)] pl-[120px]'>
            <h1 className='font-extrabold text-4xl mt-10'>BURGER KING</h1>
            <p className='mt-8 text-[10px] opacity-65'>TM & Copyright 2021 Burger King Corporation. All Rights Reserved.</p>
          </div>
          <div className='flex items-center text-white pr-[120px] gap-3'>
            <div className='flex'>
            <IoGlobeOutline className='text-2xl' />
            <p className='text-[9px]'>EN</p>
            </div>
            <FaInstagram className='text-4xl' />
            <FaFacebookSquare className='text-4xl' />
            <CiYoutube className='text-4xl bg-inherit' />
            <FaTwitter className='text-4xl' />
          </div>
        </div>
        <input className='w-[84%] h-[1px] ml-[120px] mt-20 mb-20 text-white'></input>
    </footer>
  )
}

export default Footer