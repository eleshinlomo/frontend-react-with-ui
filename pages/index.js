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
        
        <div class=' grid grid-cols-2 h-screen bg-gradient-to-r  from-black via-teal-700 to-black  hover:bg-pink-500'>



        {/* COLUMN-1 */}

       <div className='columns-1 col-span-1 md:col-span-1 lg:col-span-1 text-start md:text-end lg:text-end  text-green-300 font-bold text-base mt-32 md:mt-52 items-center lg:mt-52 space-y-3 ml-3 md:ml-6 lg:ml-6 '>

        <p class=' hover:text-blue-700'>Thank you for visiting my page...</p>

<p class=' md:text-2xl lg:text-3xl  hover:text-red-500'>I am a Fullstack React and Node JS Developer with UI skill</p>

<p class='  md:text-2xl lg:text-3xl hover:text-pink-400'>I will now be taking you to my Lounge in 15 secs... </p>
</div>


{/* COLUMN 2 */}

<div class="columns-2 col-span-1 md:col-span-1 lg:col-span-1 text-end md:text-end lg:text-end font-bold  mt-32 md:mt-52 lg:52">

    <p class='  hover:bg-blue-600 text-white text-8xl '>{count}</p>

        </div>


       </div> {/* ROW */}

        </div> 

       
    



    
  )
}
