import { delay, easeInOut, motion, useAnimate, useAnimation } from 'framer-motion'
import React, { useState } from 'react'

import { Power4 } from 'gsap';


const FeaturedProjects = () => {


    const cards=[useAnimation(),useAnimation()];

    const handleHower= (index)=>{
        cards[index].start({y:"0"})
    }

    const handleHowerEnd= (index)=>{
        cards[index].start({y:"100%"})
    }
   

  return (
    <div className='w-full h-full py-10 text-white bg-zinc-950'>
        <div className='w-full px-10'>
            <h1 className='text-5xl font-normal font-["Neue Montreal"]'>Featured projects</h1>
        </div>


        <div  className='card  border-t-[1px] mt-10 pt-10 border-zinc-700 py-10 flex gap-10 px-10 w-full'>
        
            <div className='fide w-1/2'>

            <h1 className=' font-light'> <i  class="ri-circle-fill"></i>  FYDE</h1>

                <motion.div 
                onHoverStart={()=>handleHower(0)} 
                onHoverEnd={()=>handleHowerEnd(0)}
             className='card relative h-[80vh]  mt-4 '>

                <div className=' cardcontainer absolute text-8xl z-[9] tracking-tighter left-full -translate-x-1/2 -translate-y-1/2 top-1/2 font-semibold text-lime-300'>
                <h1 className='absolute flex  overflow-hidden text-8xl z-[9] tracking-tighter left-full -translate-x-1/2 -translate-y-1/2 top-1/2 font-semibold text-lime-300'>
                {"FYDE".split("").map((item,index)=>
                <motion.span initial={{y:"100%"}} animate={cards[0]}
                transition={{ease:[0.22,1,0.36,1],
                    delay:index*.054
                }}
               
            key={index} className='inline-block'>{item}</motion.span>)}

                </h1>
                </div>
                    <div className='incard rounded-2xl w-full h-full  overflow-hidden'> 
                    <img src="src\Components\media\fyde.png" alt="" /></div>
                </motion.div>
                <div className='btn flex gap-5 mt-5 '>
            {["audit","copyright","sales deck","slides design"].map((item,index)=>(
                <button key={index} className='rounded-full border-solid border border-white px-3 py-1 uppercase'>
                    {item}
                </button>
            ))}
        </div>
            </div>
            <div className='vise w-1/2 h-full'>
            <h1 className='font-light'> <i  class="ri-circle-fill"></i> VISE
            
            </h1>
                <motion.div 
                  onHoverStart={()=>handleHower(1)} 
                  onHoverEnd={()=>handleHowerEnd(1)}
                 className='relative h-[80vh] mt-4'>
                <div  className='absolute text-8xl z-[9] tracking-tighter right-full translate-x-1/2 -translate-y-1/2 top-1/2 font-semibold text-lime-300'>
                <h1 className='absolute flex text-8xl z-[9] tracking-tighter right-full translate-x-1/2 -translate-y-1/2 top-1/2 font-semibold  overflow-hidden text-lime-300'>
                {"VISE".split('').map((item,index)=>
                <motion.span initial={{y:"100%"}} animate={cards[1]}
                transition={{ease:[0.22,1,0.36,1],
                    delay:index*.054
                }}
               
            key={index} className='inline-block'>{item}</motion.span>
                )}
                </h1>
                </div>
                <div className='incard w-full h-full rounded-xl overflow-hidden'>
                    <img className='' src="src\Components\media\vise2.jpg" alt="" />
                </div>
                </motion.div>
                <div className='btn flex gap-5 mt-5 '>
            {["agency","company presentation"].map((item,index)=>(
                <button key={index} className='rounded-full border-solid border border-white px-3 py-1 uppercase'>
                    {item}
                </button>
            ))}
        </div>
            </div>
        </div>
        <div className='flex items-center justify-center'>
        <button className='mt-5 px-4 py-4 bg-white rounded-full text-black text-[15px] font-semibold uppercase tracking-tighter flex gap-10 items-center '>view all case studies
                <div className='w-2 h-2 bg-black rounded-full '>
                    </div></button>
                    </div>

       
    </div>
  )
}

export default FeaturedProjects