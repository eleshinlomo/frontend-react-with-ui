import {useRouter} from 'next/router'


const NavBar = () => {

  const router = useRouter()
  const home = ()=>router.push('/')
  const lounge = ()=>router.push('/lounge')
  const tech = ()=>router.push('/tech')
  const nodejs = ()=>router.push('https://node-b46a.onrender.com/blogs')
  const github = ()=>router.push('https://github.com/eleshinlomo/frontend-react-with-ui')
  

  return (
    <nav> 
    
    <nav class="container relative mx-auto p-6">
            

            <div class=" space-x-6 flex flex-col  mx-0 items-center justify-center bg-white">
            <span class='flex space-x-8'>
  
            <button onClick={home} class='bg-black rounded-full px-4 py-4 text-center text-white hover:bg-blue-800 active:bg-white focus:bg-pink'>HOME</button>
            <button onClick={lounge} class='bg-black rounded-full px-4 py-4 text-center text-white hover:bg-blue-800 active:bg-white focus:bg-pink'>LOUNGE</button>
            <button onClick={tech} class='bg-black rounded-full px-4 py-4 text-center text-white hover:bg-blue-800 active:bg-white focus:bg-pink'>ABOUT</button>
            <button onClick={nodejs} class='bg-black rounded-full px-4 py-4 text-center text-white hover:bg-blue-800 active:bg-white focus:bg-pink'>NODEJS</button>
            <button onClick={github} class='bg-black rounded-full px-4 py-4 text-center text-white hover:bg-blue-800 active:bg-white focus:bg-pink'>GITHUB</button>
            
           
           
            
            </span>

            </div>

             
        </nav>

    </nav>
  )
}

export default NavBar
