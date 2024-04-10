import React, { useEffect, useState } from 'react';
import { http } from '../components/Axios';
import { Link } from "react-router-dom";
import OffersRight from './OffersRight';

export default function Offers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    http.get('offerList')
        .then(res => setData(res.data))
  }, []);

  console.log(data);

  return (
    <div className='flex h-[100%] '>
      {/* not the height of 100% can be used if it has a container and the container has a height */}
      <div className='bg-inherit w-[30%] h-[100vh] overflow-y-scroll pb-[8px]'>
        <ul className=''>
        {
            data ?
              data.map((o, index) => (
                 <li className='list' key={index}>
                  <Link to={`/offers/${o.id}`} className='flex items-center list-none h-[80px] border border-y-[rgb(43,2,0)] border-opacity-20 gap-4 ml-4'>
                      <img src={o.imgUrl} alt={o.title} className='w-[35%] h-[100%]' />
                  
                  <div className='divide-[rgb(43,2,0)]'>
                    <h2 className='text-[rgb(43,2,0)] font-extrabold text-[10px]'>{o.title}</h2>
                    <p className='text-[rgb(43,2,0)] text-[10px] mt-2'>{o.info}</p>
                  </div>
                  </Link>
                </li>
              )) : <div></div> 
        }
        </ul>
      </div>
      {/* // the right side of offers page */}
      <OffersRight />  
    </div>   
  );
}