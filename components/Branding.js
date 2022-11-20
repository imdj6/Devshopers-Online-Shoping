import React from 'react'
import { FaShoppingBag,FaBus,FaRupeeSign} from "react-icons/fa";
const Branding = () => {
  return (
    <div className='flex space-x-5 justify-around text-center p-3'>
        <div className='border border-slate-100 justify-between space-y-4 p-10 md:w-1/3'>
          <div className=''><FaShoppingBag className='bg-white border text-white  border-slate-200 rounded-full p-1 m-auto animate-bounce' color='pink' size={40}/></div>
          <div className='text-2xl font-semibold'>Premium Tshirts</div>
          <div className='text-sm '>Our T-shirts are 100% made of cotton.</div>
        </div>
        <div className='border border-slate-100 space-y-3 p-10 md:w-1/3 '>
          <div><FaBus className='bg-white border text-white  border-slate-200 rounded-full p-1 m-auto animate-bounce' color='pink' size={40}/></div>
          <div className='text-2xl font-semibold'>Free Shipping</div>
          <div className='text-sm  '>We ship all over india for FREE.</div>
        </div>
        <div className='border border-slate-100 space-y-3 p-10 md:w-1/3 '>
          <div><FaRupeeSign className='bg-white border text-white  border-slate-200 rounded-full p-1 m-auto animate-bounce' color='pink' size={40}/></div>
          <div className='text-2xl font-semibold'>Exciting Offers</div>
          <div className='text-sm'>We Provide amazing offers & discounts on our products.</div>           
        </div>
    </div>
  )
}

export default Branding