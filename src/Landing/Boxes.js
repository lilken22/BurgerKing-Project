import React from 'react'
import { list } from "../components/List";

export default function Boxes() {
    const myList = list
  return (
    <section className='py-16'>
        <div className='flex flex-wrap flex-col md:flex-row justify-between w-10/12 mx-auto'>
          {
            myList.map((item, i) =>(
                <div key={i} className='w-full md:w-[49%] mb-6 overflow-hidden rounded-[15px] xl:shadow-xl'>
                    <img src={item.imgUrl}  alt={item.Title} className='w-full max-h-[260px] md:h-[350px]' />
                    <div className='bg-white h-[120px] flex flex-col justify-center px-5'>
                        <h2>{item.itemTitle}</h2>
                        <div className='flex flex-col xl:flex-row justify-between xl:items-center'>
                            <p>{item.info}</p>
                            <button className='max-w-fit xl:min-w-fit bg-[rgb(214,35,0)]  rounded-[15px] px-4 py-1 text-white font-extrabold'>{item.button}</button>
                        </div>
                    </div>
                </div>
            ))
          }
        </div>  
    
    </section>
  )
};
