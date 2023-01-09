import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Fourcards from '../components/Fourcards'
import Fourcardswithimage from '../components/Fourcardswithimage'
import Header from '../components/Header'
import Imagedivider from '../components/Imagedivider'
import Sectionone from '../components/Sectionone'
import Imagedividertwo from '../components/Imagedividertwo'
import Footer from '../components/Footer'
import Projects from '../components/Projects'



export default function Home() {


  
  return (
    <div>
    <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My main portfolio" />
        <link rel="icon" href="/favicon.png" />
      </Head>
    
<div className= 'mt-0  sm:text-white  md:text-white lg:text-white justify-center items-center h-screen w-screen text-base '>

<div className='bg-black'>

< Header />

< Imagedivider />

<main className=' text-white block justify-center align-middle'>

< Sectionone />

< Imagedividertwo />

< Projects />

< Fourcards />

< Fourcardswithimage />






  </main>
  </div>

  < Footer />

  
</div>

   </div>  
  
  )
}
