import React from 'react'
import { MdSearch } from 'react-icons/md'
import { RiMap2Line } from 'react-icons/ri'
import { Link } from "react-router-dom"
import logo from "../Images/3ead7166db6dc8a93e9bd20fd7f6cbf88340908e-320x155.webp"
// import LocationFav from "../components/LocationFav"; 

export default function DeliveryFav() {
    
  return (
    <div className='bg-[rgb(245,235,220)] w-full h-[93vh] overflow-hidden font-serif mt-20'>
    <div className=' text-center   bg-[rgb(214,35,0)] w-full h-[70px] m-auto grid grid-cols-3 items-center'>
        <div className='col-span-2'>
            <h1 className='text-white text-3xl font-extrabold'>Locations</h1>
        </div>
        <div className='flex items-center col-span-1'>
            <h1 className='text-white text-xl font-extrabold'>Map</h1>
            <RiMap2Line className='text-white text-3xl' />  
        </div>
    </div>

    <div className='flex flex-col items-baseline gap-3 md:flex-row md:items-center md:justify-center md:gap-2 ml-[24%] mt-8'>
        <div className='flex items-center text-lg font-medium border-gray-300 flex-grow-0'>
            <button className='bg-white w-32 sm:w-50 md:w-[100px] h-[45px] rounded-l-[5px] border-gray-300 border-[2px]'>Pick Up</button>
            <button className='w-32 sm:w-50 md:w-[100px] h-[45px] rounded-r-[5px] bg-[rgb(43,2,0)] border-gray-300 border-[2px] text-white'>Delivery</button>
        </div>
        <div className='flex items-center relative md:w-[635px] flex-grow-1'>
            <input type='text' placeholder='Your Address' className='w-64 sm:w-80 md:w-[635px] h-[45px] border-[2px] border-[rgba(0,0,0,0.1)] rounded-[5px] text-[rgb(80,35,20)] text-[15px]' />
            <MdSearch className='text-gray-400 text-3xl absolute right-3' />    

        </div>
    </div>
    <div className='bg-inherit w-full h-[50%] mt-[40px] m-auto'>
        <div className=''>
                    
                    <div className='flex flex-col items-center divide-[rgb(43,2,0)]'>
                      <h2 className='text-[rgb(43,2,0)] font-extrabold text-[15px] mt-5'>
                      Use Your Current Location
                      </h2>
                      <p className='text-[rgb(43,2,0)] text-[9px] mt-1 font-semibold'>
                      Let us know where you are so we can recommend nearby locations or enter an address above.
                      </p>
                      <button className='bg-[rgb(214,35,0)] w-[200px] h-12 rounded-[20px] mt-[15px] text-white font-bold text-[15px]'>Share My Location</button>
                      <p className='underline mt-2 text-[10px] text-[rgb(43,2,0)] font-semibold'>Location Terms</p>
                    </div>
        </div>
        <div>
        <Link to='./'><img src={logo} alt="" className="w-[120px] h-[70px] m-auto mt-[5%]" /></Link>
        </div>
    </div>
   </div>
  )
}