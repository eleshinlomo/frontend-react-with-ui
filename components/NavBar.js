

const NavBar = () => {
  return (
    <nav> 
    
    <nav class="container relative mx-auto p-6">
            

            <div class=" space-x-6 flex flex-col  mx-0 items-center justify-center bg-white">
            <ul class='flex space-x-8'>
            <li class='bg-black rounded-full px-6 text-center text-white hover:bg-blue-800 active:bg-white focus:bg-pink' ><a href="/">HOME</a></li>
            <li class='bg-black rounded-full px-6 text-center text-white hover:bg-blue-800 active:bg-white focus:bg-pink' ><a href="/lounge">LOUNGE</a></li>
            <li class='bg-black rounded-full px-6 text-center text-white hover:bg-blue-800 active:bg-white focus:bg-pink' ><a href="/tech">TECH USED</a></li>
            <li class='bg-black rounded-full px-6 text-center text-white hover:bg-blue-800 active:bg-white focus:bg-pink' ><a href="https://node-b46a.onrender.com/blogs">BACKEND PROJECT</a></li>
            <li class='bg-black rounded-full px-6 text-center text-white hover:bg-blue-800 active:bg-white focus:bg-pink' ><a href="https://github.com/eleshinlomo/frontend-react-with-ui">GITHUB</a></li>
            
            </ul>

            </div>

             
        </nav>

    </nav>
  )
}

export default NavBar