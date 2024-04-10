import React, { useState } from 'react'
import { MdSearch } from 'react-icons/md'
import { RiMap2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import LocationFav from "../components/LocationFav";

export default function OrderFav() {

    const [displayFav, setDisplayFav] = useState({
        nearby: true,
        fav: false,
        recent: false
    })

  return (
    <section className='bg-[rgb(245,235,220)] w-full h-[93vh] overflow-hidden font-serif mt-20'>
        <div className=' text-center  bg-[rgb(214,35,0)] w-full h-[70px] m-auto grid grid-cols-3 items-center'>
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
                <button className='bg-[rgb(43,2,0)] w-32 sm:w-50 md:w-[100px] h-[45px] rounded-l-[5px] text-white border-gray-300 border-[2px]'>Pick Up</button>
                <button className='w-32 sm:w-50 md:w-[100px] h-[45px] rounded-r-[5px] bg-white border-gray-300 border-[2px]'>Delivery</button>
            </div>
            <div className='flex items-center relative md:w-[635px] flex-grow-1'>
                <input type='text' placeholder='Your Address' className='w-64 sm:w-80 md:w-[625px] h-[45px] border-[2px] border-[rgba(0,0,0,0.1)] rounded-[5px] text-[rgb(80,35,20)] text-[15px]' />
                <MdSearch className='text-gray-400 text-3xl absolute right-3' />    

            </div>
        </div>

        <div className=''>
            <ul className='flex items-center justify-center list-none mr-[5%] mt-11 text-xl font-semibold w-[60%] ml-[20.5%] relative'>
                <div className={`absolute bottom-0 bg-red-600 h-1 w-[33.33%] ${displayFav.fav ? 'left-[33.33%]' : displayFav.recent ? 'left-[66.66%]' : 'left-0'} `}></div>
                <div className='hover:border-b-[rgb(214,35,0)] w-[33.33%] flex flex-col border-[3px] border-x-0 border-t-0 ease-in-out cursor-pointer pb-[15px]'>
                    <Link to='' className='w-[100%] md:ml-[40%] md:sm:[30%] sm:[35%] flex items-center' onClick={() => setDisplayFav({nearby: true, fav: false, recent: false})}><li>Nearby</li></Link>
                </div>
                <div className='hover:border-b-[rgb(214,35,0)] w-[33.33%] flex flex-col border-[3px] border-x-0 border-t-0 ease-in-out cursor-pointer pb-[15px] '>
                    <Link to='' className='flex items-center w-[100%] md:ml-[35%] sm:[30%]' onClick={() => setDisplayFav(prev => {return {...prev, fav: true, nearby: false}})}><li>Favourite</li></Link>
                </div>
                <div className='hover:border-b-[rgb(214,35,0)] w-[33.33%] flex flex-col border-[3px] border-x-0 border-t-0 ease-in-out cursor-pointer pb-[15px]'>
                    <Link to='' className='flex items-center w-[100%] ml-[35%]' onClick={() => setDisplayFav(prev => {return {fav: false, recent: true, nearby: false}})}><li>Recents</li></Link>
                </div>
            </ul>
            <div className='flex items-center w-[60%] border-[rgba(0,0,0,0.1)] border-[1px] ml-[20.5%]'></div>
        </div>

        <div>
        </div>
        <LocationFav displayFav={displayFav}/>
    </section>
  )
}
