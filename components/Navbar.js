import React from 'react';
import Link  from 'next/link'

const Navbar = () => {
  return (

    <nav className='bg bg-gradient-to-r from-black via-transparent to-indigo-700  text-white font-bold  w-screen'>
  <ul className=' md:flex lg:flex justify-center align-middle  sm:space-y-4 md:space-x-6 lg:space-x-6 py-6 mb-0 font-bold '>
    <Link href='/' style={{ textDecoration: 'none' }}><li className='mt-4 hover:text-orange-500 focus:text-yellow-400'>HOME</li></Link>
    <Link href='#'style={{ textDecoration: 'none' }}><li className='hover:text-orange-500'>ABOUT</li></Link>
    <Link href='#'style={{ textDecoration: 'none' }}><li className='hover:text-orange-500'>GET IN TOUCH</li></Link>
    <Link href='#'style={{ textDecoration: 'none' }}><li className='hover:text-orange-500'>GITHUB</li></Link>
  </ul>
</nav>

  )
}

export default Navbar