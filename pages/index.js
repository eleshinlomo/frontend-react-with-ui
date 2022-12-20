import Head from 'next/head'
import Image from 'next/image'
import Fourcards from '../components/Fourcards'
import Fourcardswithimage from '../components/Fourcardswithimage'
import Header from '../components/Header'
import Imagedivider from '../components/Imagedivider'
import Sectionone from '../components/Sectionone'
import Imagedividertwo from '../components/Imagedividertwo'
import Footer from '../components/Footer'



export default function Home() {
  return (
    
    
<div className= 'mt-0  sm:text-white  md:text-white lg:text-white justify-center items-center h-screen w-screen text-base '>



< Header />

< Imagedivider />

<main className=' text-white block justify-center align-middle'>

< Sectionone />

< Imagedividertwo />

< Fourcards />

< Fourcardswithimage />

< Footer />







  </main>

  

  
</div>
     
  
  )
}
