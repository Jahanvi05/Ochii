import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import FeaturedProjects from './Components/FeaturedProjects'
import Client from './Components/Client'
import Cards from './Components/Cards'
import Ready from './Components/Ready'
import Footer from './Components/Footer'

//locomotive 
//framer motion - framer supported animation (ease tells the speed of animation)


import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (

    <div className='w-full min-h-screen text-white bg-zinc-900'>

      <Navbar/>
      <Landing/>
      <Marquee/>
      <About/>
      <Eyes/>
      <FeaturedProjects/>
      <Client/>
      <Cards/>
      <Ready/>
      <Footer/>
    </div>

  )
}

export default App