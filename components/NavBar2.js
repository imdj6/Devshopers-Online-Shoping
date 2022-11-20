import React from 'react'
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline'
import { MoonIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
const NavBar2 = () => {
  return (
    <nav className='flex justify-between items-center mt-8 ml-5 xl:ml-10 font-bold'>
      <div className='flex space-x-5'>
        <Link href={"/"}><div className='cursor-pointer'>Home</div></Link>
        <Link href={"/tshirts"}><div className='cursor-pointer'>T-Shirts</div></Link>
        <Link href={"/mugs"}><div className='cursor-pointer'>Mugs</div></Link>
        <Link href={"/hoodies"}><div className='cursor-pointer'>Hoodies</div></Link>
        <Link href={"/sweatshirts"}><div className='cursor-pointer'>sweatshirts</div></Link>
      </div>
      <div className='flex space-x-5 mr-5 xl:mr-10 items-center'>
        <Link href={"/login"}><div className='bg-pink-500 border text-white p-[0.45rem] border-slate-200 rounded-lg cursor-pointer'>Login</div></Link>
        <Link href={'/cart'}>
          <div className='border p-1 border-slate-200 rounded-lg cursor-pointer'><ShoppingCartIcon className='h-6 w-6 text-pink-500' /></div>
        </Link>
        <div className='border p-1 border-slate-200 rounded-lg cursor-pointer'><UserIcon className='h-6 w-6 text-pink-500' /></div>
        <div className='border p-1 border-slate-200 rounded-lg cursor-pointer'><MoonIcon className='h-6 w-6 text-pink-500' /></div>
      </div>
    </nav>
  )
}

export default NavBar2
