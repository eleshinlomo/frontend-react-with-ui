import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'


const portfolio = () =>{

    const [count, setCount] = useState(0)
  

    const counter = useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=>count + 1)
        },1000)
        
    },)
     
      
    
    return (
  <div class='grid h-screen w-screen'>
    <Head>
      <title>My Portfolio</title>
      <meta name="description" content="This is the homepage of my portfolio website" />
    </Head>
  
    <div class=' grid grid-cols-1'>

    <div class='columns-1 text-center bg-gradient-to-r from-red-500 via-black to-red-600'>
    
      
      <image src={'/assets/christmas-gc85cc9870_1920.jpg'} class='h-96 w-screen md:w-screen lg:w-screen'/>
      <p class='text-white font-bold animate-bounce text-center mt-5 text-lg md:text-6xl lg:text-6xl'>MERRY CHRISTMAS TO ALL</p>
      
      </div>
      </div>

      <div class=' grid grid-cols-6 gap-4 space-x-5 text-center bg-slate-800'>
      
      

      <div class='columns-1 col-span-full bg-gradient-to-r from-gray-800 via-black to-red-400 text-white text-center font-extralight '>
      
      <h1 class='place-content-end font-bold'>This is my portfolio and you are currently viewing project 1.</h1>
      <p class='place-items-end py-3 text-green-800 font-semibold text-2xl'>You have spent {count} seconds on this page.</p>
      <Link href='/about' ><p class='place-items-end py-10 bg-red-600 text-white font-bold rounded-full text-lg'>See tech used for Project 1</p></Link>
      </div>

      <div class='columns-2 col-span-full sm:text-sm md:text-3xl lg:text-4xl md:col-span-full lg:col-span-full  bg-gradient-to-r from-blue-800 via-gray-900 to-blue-800 text-white font-bold'>
      
      <image src={'/assets/Screenshot 2022-12-13 133913.png'} class='content-start sm:h-screen sm:w-full'/>
      <p class='place-items-end md:py-38 lg:py-48 '>Made with Vanilla Javascript</p>
      <Link href='https://landingpage5.netlify.app' ><p class='place-items-end py-10 mt-28 bg-gray-900 text-white font-bold rounded-full text-sm md:text-2xl lg:text-3xl'>See Project 2</p></Link>
      </div>

      <div class='columns-3 col-span-full mb-5 sm:text-sm md:text-2xl lg:text-3xl md:col-span-full lg:col-span-full bg-gradient-to-r from-blue-700 via-green-600 to-slate-900  lg:space-x-8 text-white font-extralight '>
      
      <image src={'/assets/nodejs.png'} class='sm:h-screen sm:w-screen'/>
      <h1 class=' py-content-end py-5 md:py-5 lg:py-28 sm:space-y-10 ml-auto'>This is a blog running on backend server</h1>
      <p class='  py-content-end   space-x-12 space-y-4  md:space-x-32 lg:space-x-32 font-bold '>This wesbite was made with Node js, Express js and connected to MongoDB Database. Hosted on Render.</p>
       <p class='animate-bounce'>Please wait for few seconds for the website to load after clicking</p>
      <Link href='https://node-b46a.onrender.com/blogs ' ><h3 class=' content-around py-10 bg-gradient-to-r from-blue-800 to-gray-900 text-white font-bold rounded-full sm:text-sm md:text-2xl lg:text-3xl'>See Project 3</h3></Link>
      </div>

    </div>
  </div>
)}


