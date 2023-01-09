import React from 'react';
import Link  from 'next/link'

const Navbar = () => {
  return (
<div className='bg-black'>
    <nav className=' bg-black bg-gradient-to-r md:from-black md:via-transparent md:to-indigo-700 lg:from-black lg:via-transparent lg:to-indigo-700  text-white font-bold  w-screen'>
  <ul className=' md:flex lg:flex justify-center align-middle  space-y-16 md:space-x-6 lg:space-x-6 py-6 mb-0 font-bold md:space-y-4 lg:space-y-4  '>
    <Link href='/' style={{ textDecoration: 'none' }}><li className='mt-4 hover:text-orange-500 focus:text-yellow-400 text-white'>HOME</li></Link>
    <Link href='#'style={{ textDecoration: 'none' }}><li className='hover:text-orange-500 text-white'>ABOUT</li></Link>
    <Link href='#'style={{ textDecoration: 'none' }}><li className='hover:text-orange-500 text-white'>GET IN TOUCH</li></Link>
    <Link href='https://github.com/eleshinlomo/frontend-react-with-ui'style={{ textDecoration: 'none' }}><li className='hover:text-orange-500 text-white'>GITHUB</li></Link>
  </ul>
</nav>
</div>

  )
}

export default Navbar