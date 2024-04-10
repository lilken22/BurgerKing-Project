import React, { useEffect, useState }from 'react'
import { useParams } from "react-router-dom";
import { MdOutlineSmartphone } from "react-icons/md";
import { http } from "../components/Axios";
import  Modal  from "../components/Modal";


export default function OffersRight() {
 const { id } = useParams()

 const [selectedItem, setSelectedItem] = useState({
  "imgUrl": "https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/17da7c76013ab0f2fd8ab60cfa711f2a16147526-800x513.png?w=320&q=40&fit=max&auto=format",
  "title": "CLICK & COLLECT FIRST ORDER: FREE WHOPPER WITH PURCHASE OVER £3",
  "info": "A free Whopper (642 Kcal) with your first purchase using Click & Collect with a minimum spend of £3. Participating restaurants only"
 })
   useEffect(() =>{
      if(id)
      http.get(`/offerList/${id}`)
          .then(res => setSelectedItem(res.data))
   }, [id])

   const [displayModal, setDisplayModal] = useState(false)

  return (
    <div className='flex flex-col justify-center bg-inherit w-[70%] h-100% overflow-scroll'>
      {
              <div  className='bg-slate-100 flex flex-col items-center justify-center w-[100%]   h- [40%]'>
                    <img src={selectedItem.imgUrl} alt={selectedItem.title} className='w-[50%] h-[70%] pt-[10px]' />

              </div>

                
            }
        <div className='bg-inherit w-[100%] h-[60%] xl:shadow-xl pb-[85px]'>

            <div className='divide-[rgb(43,2,0)] h-[40%] mt-3'>
                  <div className='leading-tight'>
                    <h2 className='text-[rgb(43,2,0)] font-extrabold text-[25px] h-[50%] pt-[0px] ml-[13%]'>CLICK & COLLECT FIRST ORDER: FREE WHOPPER WITH</h2>
                    <h2 className='text-[rgb(43,2,0)] text-[25px] h-[10px] font-extrabold pb-[30px] ml-[36%]'>PURCHASE OVER £3</h2>
                  </div>
                    <p className='text-[rgb(43,2,0)] text-[10px] font-extrabold mt-2 ml-[32%] w-[36%] h-[30%]'>A free Whopper (642 Kcal) with your first purchase using Click & Collect with a minimum spend of £3. Participating restaurants only</p>
            </div>

            <div className='opacity-70'>
              <p className='text-[rgb(43,2,0)] text-[11px] font-bold ml-[45%]'>How to redeem:</p>
              
              <p className='text-[rgb(43,2,0)] text-[11px] font-bold ml-[35%]'>(1) Sign in, click 'add to mobile order' & select restaurant</p>
                <p className='text-[rgb(43,2,0)] text-[11px] font-bold ml-[43%]'>(2) Add Whopper to basket</p>
                <p className='text-[rgb(43,2,0)] text-[11px] font-bold ml-[36%]'>(3) Add one or more products so basket total is over £3</p>
                <p className='text-[rgb(43,2,0)] text-[11px] font-bold ml-[46%]'>(4) Checkout</p>
              
            </div>

            <div className='flex flex-col items-center pt-[30px]'>
              <button className='flex items-center gap-3 w-[22%] h-[40px] bg-[rgb(214,35,0)] text-white font-bold rounded-[50px] m-auto' onClick={() => setDisplayModal(true)}>
                <MdOutlineSmartphone className='ml-[30px] text-[25px] font-extrabold' />
                <h2 className='text-[15px] font-extrabold'>Redeem Reward</h2>
              </button>
              <div className='flex flex-col items-center justify-center'>
              <p className='text-[rgb(214,35,0)] text-[8.5px] font-semibold mt-[22px]'>Your subtotal must be £2.91 to redeem this offer. Add £2.91 to redeem</p>
              <p className='text-[rgb(43,2,0)] text-[8.5px] font-semibold w-[40%] ml-[2%] mt-5'>A free Whopper with your first purchase using Click and Collect. Offer must be redeemed with first purchase with a minimum spend of £3. Not valid in conjunction with any other offer. One voucher per transaction. Valid only in the UK. Subject to availability. Voucher valid at participating restaurants where Click and Collect is available only. Not valid at Burger King motorway service locations, airports train stations and holiday parks. © 2022 Burger King Europe GmbH. All rights reserved.</p>
              </div>

            </div>
        </div>
        {displayModal && <Modal setDisplayModal={setDisplayModal}/>} 
        </div>
  )
}