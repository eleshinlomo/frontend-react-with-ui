import React from 'react'

const about = () => {
  return (
    <div class='mx-auto sm:text-lg md:text-3xl lg:text-3xl text-white font-bold mt-20  text-center  py-5 bg-gradient-to-b from-orange-400 via-blue-500 to-zinc-500 h-screen rounded-full'>
    <ul class='mx-auto text-center mt-52 space-y-6 font-bold'>
        <li>Tech used for this project are:</li>
        <li class='hover:text-blue'>Next Js(React)</li>
        <li class='hover:text-blue'>Tailwind</li>
        <li class='hover:text-blue'>This is a work in progress...</li>
    </ul>
    </div>
  )
}

export default about
