import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'





const Notfound = () => {

    const [count, setCount] = useState(0)
  

const counter = useEffect(()=>{

  setTimeout(()=>{
    setCount((count)=>count + 1)
  }, 1000)
  if (count === 5) {
    goToContract()
  }

},)
const router = useRouter()
const goToContract = ()=>router.push('/')

    return (
  
      <div>
  
      Ooops! You Fell in a ditch. You are on the wrong page but HANG ON... I will help you out really quick.
      <p class='text-blue text-4xl'>You will be redirected in 5secs {count}.</p>
      
      </div>
    )
  }
  
  export default Notfound
