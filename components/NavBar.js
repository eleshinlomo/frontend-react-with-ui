
import {useRouter} from 'next/router'


const NavBar = () => {

  const router = useRouter()
  const home = ()=>router.push('/portfolio')
  const lounge = ()=>router.push('/lounge')
  const tech = ()=>router.push('/about')
  const github = ()=>router.push('https://github.com/eleshinlomo/frontend-react-with-ui')
  

  return (
    <nav class='grid grid-cols-1 bg-red-500'> 
    
  <span className=' col-auto text-center py-8 space-x-4 items-center justify-center'>


            <button onClick={home} class='bg-black rounded-full px-4 py-4 text-center text-white hover:bg-blue-800 active:bg-white focus:bg-pink'>HOME</button>
            <button onClick={lounge} class='bg-black rounded-full px-4 py-4 text-center text-white hover:bg-blue-800 active:bg-white focus:bg-pink'>LOUNGE</button>
            <button onClick={tech} class='bg-black rounded-full px-4 py-4 text-center text-white hover:bg-blue-800 active:bg-white focus:bg-pink'>ABOUT</button>
            <button onClick={github} class='bg-black rounded-full px-4 py-4 text-center text-white hover:bg-blue-800 active:bg-white focus:bg-pink'>GITHUB</button>
            
            </span>
           
           

    </nav>
  )
}

export default NavBar
