import {useRouter} from 'next/router'


const NavBar = () => {

  const router = useRouter()
  const home = ()=>router.push('/')

  return (
    <nav> 
    
    <nav class="container relative mx-auto p-6">
            

            <div class=" space-x-6 flex flex-col  mx-0 items-center justify-center bg-white">
            <span class='flex space-x-8'>
  
            <button onClick={home} class="text-white bg-black rounded-full space-x-8 mx-8">HOME</button>
            
           
           
            
            </span>

            </div>

             
        </nav>

    </nav>
  )
}

export default NavBar
