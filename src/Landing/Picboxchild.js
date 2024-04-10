import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/burgerking-phonelogo-1340x2014.webp';
import playstore from "../Images/playstore.png";
import applestore from "../Images/applestore.png";

function Picboxchild() {
  return (
    <div className='bg-[rgb(240,230,204)] w-full h-auto md:h-4.5/5 pt-[10px] overflow-hidden'>
      <div className='flex flex-col md:flex-row bg-[rgb(240,230,204)] w-full h-auto md:h-80vh'>
        {/* Logo Container */}
        <div className='md:w-1/2 flex flex-col justify-center items-center md:order-first'>
          <Link to='./'>
            <img src={logo} alt='' className='h-[80vh] w-[80%] md:w-full md:max-w-md mb-6 md:mb-3 md:ml-[70%]' />
          </Link>
        </div>
        {/* Content Container */}
        <div className='md:w-1/2 flex flex-col justify-center items-center md:order-last'>
          <div className='max-w-md px-6'>
            <h1 className='font-extrabold text-5xl text-[rgb(82,47,45)] mt-2 ml-0 text-center'>
              Save £££ <br/> With offers on <br/> demand  
            </h1>
            <div className='flex justify-center   gap-4 mt-8 ml-6 md:mt-8 '>
              <Link to='./'>
                <img src={applestore} alt='' className='w-auto h-[40px] rounded-[5px] mb-4' />
              </Link>
              <Link to='./'>
                <img src={playstore} alt='' className='w-auto h-[40px] rounded-[5px] mb-4' />
              </Link>   
            </div>
            <p className='text-amber-950 font-semibold mt-3 text-md text-center'>
              Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. Terms apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Picboxchild;