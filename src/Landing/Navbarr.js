import React from 'react'

export default function Navbarr() {
  return (
    <section className='flex justify-between items-center px-4 text-white bg-[rgb(80,35,20)] pt-20 '>
      <div className=''>
        <img src='https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/0cf1af0a0daab9d078b561f98d55a73aec3bcb61-1250x200.png?w=320&q=40&fit=max&auto=format'  alt='logo-text' className='w-[250px]'/>
        <p className='text-lg font-semibold'>
          Welcome! You can earn points with every purchase and use them to redeem rewards.
        </p>
      </div>

      <button className='flex border py-1 pl-2 pr-5 items-center rounded-[16px] outline-2 focus:border-4 hover:bg-[rgb(227,198,168)]' >
        <img src='https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/8044204b423e85ae195d35eb5d342da17bc99a4e-197x197.svg' alt='icons' className='w-7 mr-2 '/>
        Learn More
      </button>
    </section>
  )
}
