import Head from 'next/head'
import Image from 'next/image'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'

export default function Home() {

  const [count, setCount] = useState(0)
  

  const counter = useEffect(()=>{

    setTimeout(()=>{
      setCount((count)=>count + 1)
    }, 1000)
    if (count === 15) {
      goToContract()
    }
  
  },)
 const router = useRouter()
  const goToContract = ()=>router.push('/lounge')


  return (
   <div>

<Head>
        <title>My Front End Portfolio</title>
        <meta name="description" content="This website will soon be my main link to all portfolio" />
        <link rel="shortcut icon" href="/favicon1.ico"/>
        
      </Head>

   
    <div class='contianer relative flex-col  h-screen sm:w-screen md:w-screen lg:w-screen bg-gradient-to-r  from-black via-teal-500 to-black mx-0 px-12 hover:bg-pink-500'>

    <div class='row flex'>

<div class="col w-1/2 flex-col  text-green-300 font-bold text-xl mt-40 ">

    <p class='text-2xl py-6 hover:text-blue-700'>Thank you for visiting my page...</p>

    <p class='text-4xl py-6 hover:text-red-500'>I am a Fullstack React and Node JS Developer with UI skill</p>

   <p class='text-6xl hover:text-pink-400'>I will now be taking you to my Lounge in 15 secs... </p>
   </div>

   <div class="col flex-col w-1/2  font-bold text-xl mt-40">

    <p class='text-center   mt-8 hover:bg-blue-600 text-white text-8xl '>{count}</p>
    
    
    

   </div>
   </div>

   

</div>
    </div>
  )
}
