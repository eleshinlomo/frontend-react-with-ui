import React from 'react';
import Link from 'next/link';
import RandomNumberGenerator from './RandomNumberGenerator';

const Projects = () => {
  return (
    

<section>
<article>
  <span className='bg-radialpurple  sm:justify-center space-y-2 sm:align-middle md:space-x-8 lg-space-x-8 block  md:flex lg:flex w-full md:py-6 lg:py-6 '>
    
  <div className='border bg-black hover:bg-gray-900 shadow-gray-900 justify-center align-middle  bg-radialpurple w-full h-52 md:w-80 lg:w-80 overflow-hidden'>
    <p className=' '>BLOG MADE WITH NODE JS, MongoDB & EXPRESS JS</p>
    <Link href='https://myblog2.onrender.com'><img src='/assets/nodejs2.png' className='justify-center  items-center w-full h-full' /></Link>
    </div>
    <div className='border bg-black hover:bg-gray-900 shadow-gray-900 justify-center align-middle  bg-radialpurple w-full h-52 md:w-80 lg:w-80 overflow-hidden'>
    <p className=' '>BLOG MADE WITH NODE JS & EXPRESS JS</p>
    <Link href='https://node-b46a.onrender.com'><img src='/assets/nodejs.png' className='justify-center  items-center w-full h-full' /></Link>
    
    </div>

    <div className='border hover:bg-gray-900  shadow-gray-900 justify-center align-middle bg-black bg-radialpurple w-full h-52 md:w-80 lg:w-80 overflow-hidden'>
    <p className='text-center '>LOTTO NUMBERS GENERATOR</p>
    < RandomNumberGenerator />
    </div>
    
    <div className='border hover:bg-gray-900  shadow-gray-900 justify-center align-middle bg-black bg-radialpurple w-full h-52 md:w-80 lg:w-80 overflow-hidden'>
    <p className=''>PROJECT 4</p>
    <img src='https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80' className=' justify-center  items-center h-full w-full object-fill bg-cover' />
    
    </div>
   
</span>
</article>

</section>

    
  )
}

export default Projects