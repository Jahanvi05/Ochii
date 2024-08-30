import React from 'react'

const About = () => {
    return (
        <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl  text-gray-900 '>
            <h1 className='font-["Neue Montreal"] text-[4vw] leading-[3.5vw] tracking-tight'>
                Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
            </h1>
            <div className='w-full border-t-[2px] mt-20 border-[#738146] flex gap-5'>
            
            <div className='w-1/2'>
                <h1 className='text-5xl text-gray-900 mt-4 '>Our approach:</h1>
                <button className='mt-5 px-6 py-4 bg-zinc-900 rounded-full text-white text-[15px] uppercase tracking-tighter flex gap-10 items-center '>Read More 
                <div className='w-2 h-2 bg-white rounded-full '>
                    </div></button>
            </div>

            <div className='w-1/2 h-[80vh]  mt-4'><img className='rounded-2xl' src="src\Components\media\img.jpg" alt="" /></div>
        </div>
        </div>
    )
}

export default About