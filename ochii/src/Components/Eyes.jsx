import { motion } from "framer-motion";
import { useEffect, useState } from "react"
import React from 'react'

const Eyes = () => {


const [rotate,setRotate] = useState(0);

  /*use effect tb use hota hai jb hm apni poori websoe load krne k baad is kaam ko krna hai jo useEffect m hai*/

  useEffect(()=>
  {
    window.addEventListener("mousemove",(e)=>
    {
      let mouseX= e.clientX; //position of mouse in x axis at the screen
      let mouseY= e.clientY; // position of y axis at the screen

      // console.log(mouseX,mouseY);

       // diffecrence between mouse position and center of screen
      let deltaX = mouseX-innerHeight/2;
      let deltaY = mouseY-innerHeight/2;
     
      var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI); // angle of the line from mouse position till center of the screen

      setRotate(angle-180);

    })
  })


  return (
    <div className='eyes w-full h-screen overflow-hidden' >
      < div data-scroll data-scroll-speed="-.7" className='relative w-full h-full overflow-hidden bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] cursor-pointer'>

        <div className='flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>

          <div className='w-[15vw] h-[15vw] flex justify-center items-center rounded-full bg-zinc-100'>
            <div className='w-[10vw] h-[10vw] relative justify-center items-center rounded-full bg-zinc-900'>
            <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute w-full h-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
              <div className='w-6 h-6 bg-zinc-100 rounded-full'></div>
              </div>
              
            </div>
          </div>
          <div className='w-[15vw] h-[15vw] rounded-full flex justify-center items-center  bg-zinc-100'>
          <div className='w-[10vw] h-[10vw] relative justify-center items-center rounded-full bg-zinc-900'>
              <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute w-full h-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
              <div className='w-6 h-6 bg-zinc-100 rounded-full'></div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Eyes