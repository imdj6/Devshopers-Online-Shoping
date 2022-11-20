import React from 'react'
import Image from 'next/image'
import Logo from '../public/logo.jpg'
const NavBar = () => {
  return (
    <div className='flex justify-around items-center font-thin'>
     <div><Image
        src={Logo}
        height={60}
        alt="Logo"
      /></div>
     <div>FREE SHIPING FOR ORDER ABOVE ₹1000!</div>
     <div>Contact us 24/7:+91 993926 8896</div>
    </div>
  )
}

export default NavBar