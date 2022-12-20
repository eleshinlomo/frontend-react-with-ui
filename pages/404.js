import React from 'react'
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'

const Notexist = () => {
    const [count, setCount] = useState(0)

   

   const router = useRouter()

   

   useEffect(()=>{
    setTimeout(()=>{

        setCount(count + 1)

    }, 1000)
    
    if(count ===7){
        router.push('/')
    }
   },)
   
  return (
    <>
        <div className='text center text-4xl text-blue-900'>The page you are visiting does not exist. You will be redirected in 7secs <span className='text-6xl text-green-900'>{count}</span></div>
    </>
  )
}

export default Notexist