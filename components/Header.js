import React from 'react'

const Header = () => {
  return (
    
    <header className='bg-gradient bg-gradient-to-r from-indigo-400 to-indigo-600'>


  
  <section className='w-screen align-middle'>
  <ul className='sm:block md:flex lg:flex justify-center items-center   md:py-2 lg:py-2 space-y-0'>
  <li className='bg-radialpurple'>Hello! I Am  <span className='text-white bg-radialpurple'>Elesh</span></li>

  <li><img src='/assets/boy-2026226.svg' className='justify-center items-center w-full bg-radialpurple' /></li>
  
<li>
<span className='justify-center items-center w-full md:2xl lg:2xl text-red-900 font-bold'>A Software Engineer</span>
<div className='text-base justify-center items-center w-full md:2xl lg:2xl font-extrabold bg-radialpurple'>with impressive coding  <span className='text-white'> skill.</span></div>
</li>
</ul>
</section>


</header>

  )
}

export default Header