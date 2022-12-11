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

  
        
        
        {/* ROW */}
        
        <div class=' grid grid-cols-2 h-screen bg-gradient-to-r  from-black via-teal-500 to-black  hover:bg-pink-500'>



        {/* COLUMN-1 */}

       <div className='columns-1 col-span-1  text-start  text-green-300 font-bold text-base mt-20 md:mt-52 lg:mt-52 space-y-3 ml-6 '>

        <p class='text-lg hover:text-blue-700'>Thank you for visiting my page...</p>

<p class='text-lg md:text-2xl lg:text-3xl  hover:text-red-500'>I am a Fullstack React and Node JS Developer with UI skill</p>

<p class=' text-lg md:text-2xl lg:text-3xl hover:text-pink-400'>I will now be taking you to my Lounge in 15 secs... </p>
</div>


{/* COLUMN 2 */}

<div class="columns-2 text-end font-bold  mt-52">

    <p class='  hover:bg-blue-600 text-white text-8xl '>{count}</p>

        </div>


       </div> {/* ROW */}

        </div> 

       
    



    
  )
}
