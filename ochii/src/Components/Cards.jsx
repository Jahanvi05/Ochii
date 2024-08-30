import React from 'react'

const Cards = () => {
  return (
    <div 
    data-scroll 
    data-scroll-section data-scroll-speed="-.9"
    className='w-full h-screen px-10 py-[17vh] bg-zinc-100 flex gap-5 items-center'>
        
        <div
  
        className='cardcontainer w-1/2 h-[62vh]'>
            <div className='card w-full h-full bg-[rgb(0,77,67)] rounded-[13px] flex items-center justify-center relative'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='rounded-full border-solid border border-lime-400 text-lime-300 text-sm px-3 py-1 absolute left-7 bottom-7'>
                   @2019-2022
                </button>
            </div>
        </div>
        <div className='container w-1/2 h-[62vh] flex  gap-5 '>
            <div className='w-full h-full bg-zinc-900 rounded-[13px] flex items-center justify-center relative'>
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='rounded-full border-solid border text-zinc-300 border-zinc-300 uppercase px-3 py-1  text-[2.5vh]  bottom-7 left-7 absolute'>
                  rating 5.0 on clutch
                </button>
            </div>
            <div className='w-full h-full bg-zinc-900 rounded-[13px] flex items-center justify-center relative'>
           
            <img style={{height:"20vh"}} src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='rounded-full border-solid border border-zinc-300 text-zinc-300 uppercase px-3 py-1 text-[2.5vh] font-medium bottom-7 left-7 absolute'>
                  rating 5.0 on clutch
                </button>
            </div>
        </div>
    </div>
  )
}

export default Cards