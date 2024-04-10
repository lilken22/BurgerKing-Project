import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function LocationFav({ displayFav }) {


    const [selectedNav, setSelectedNav] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/favLocRec')
        .then((res) => res.json())
        .then(data => setSelectedNav(data))
      }, [])
  
  return (
    <div className='bg-inherit w-full h-[50%] mt-[40px] m-auto'>
        <div className=''>
          {
            displayFav.nearby ? <Link to='' className='flex flex-col items-center list-none h-[90px] bg-none'>
            <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRUeoucRsn17_x3Sudnyoq9rhpagYbiB22faAYkwNxl2oOeJyAp' alt='' />
        
        <div className='flex flex-col items-center divide-[rgb(43,2,0)]'>
          <h2 className='text-[rgb(43,2,0)] font-extrabold text-[17px] mt-5'>Find a Location Nearby</h2>
          <p className='text-[rgb(43,2,0)] text-[12px] mt-1 font-semibold'>Let us know where you are so we can recommend nearby locations.</p>
          <button className='bg-[rgb(214,35,0)] w-[160px] h-12 rounded-[20px] mt-[15px] text-white font-bold text-[15px]'>Share Location</button>
        </div>
        </Link>  :
            
            displayFav.recent ? <Link to='' className='flex flex-col items-center list-none h-[80px]'><img src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRgf28EleVoOfhURcfnbOP5RiIDVc4RKPz7xiPKwRq6hcfOj0RG'  alt=''/> 
            
            <div className='flex flex-col items-center divide-[rgb(43,2,0)]'>
          <h2 className='text-[rgb(43,2,0)] font-extrabold text-[17px] mt-5'>Sign In to Save Favourite </h2>
          <p className='text-[rgb(43,2,0)] text-[12px] mt-1 font-semibold'>First sign in or sign up for an account.</p>
          <button className='bg-[rgb(214,35,0)] w-[150px] h-12 rounded-[20px] mt-[15px] text-white font-bold text-[15px]'>Sign In</button>
        </div>
        </Link>:
            
             <Link to='' className='flex flex-col items-center list-none h-[80px]'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkkjhKvWebNWKKwod0OKSsQIySS026ouVqtx2MyW9LSf8amNKv'  alt=''/>

           <div className='flex flex-col items-center divide-[rgb(43,2,0)]'>
          <h2 className='text-[rgb(43,2,0)] font-extrabold text-[17px] mt-5'>Sign In to See Recents Locations</h2>
          <p className='text-[rgb(43,2,0)] text-[12px] mt-1 font-semibold'>To set a favorite location, first sign in or sign up for an account.</p>
          <button className='bg-[rgb(214,35,0)] w-[140px] h-12 rounded-[20px] mt-[15px] text-white font-bold text-[15px]'>Sign In</button>
        </div>
        </Link>
          }
        </div>
      </div>
  )
}