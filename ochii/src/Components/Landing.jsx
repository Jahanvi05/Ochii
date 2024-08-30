import { motion } from 'framer-motion';
import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";


function Landing() {

    
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-950 pt-1'>
            <div className='textstruct mt-40 px-20'>

                {["we create", "eye opening", "presentations"].map((item, index) => {
                    return (
                        <div className="masker  uppercase overflow-hidden">
                            <div className='w-fit flex'>
                                {index === 1 && (<motion.div 
                                initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1}} className='w-[8vw] h-[5.7vw] bg-green-600 mt-3 relative rounded-md'></motion.div>)}
                                <h1 className='font-["FoundersGrotesk X-Condensed"] text-[7.5vw] leading-[6.5vw] tracking-tighter font-semibold'>{item}</h1>
                            </div>
                        </div>
                    )
                })}

            </div>

            <div className='border-t-[2px] border-zinc-800 mt-[7.4vw] flex justify-between items-center py-5 px-20'>
                {["For public and private companies", "From the First pitch to IPO"].map((item, index) => {
                    return (
                        <p>{item}</p>
                    )

                })}

                <div className='start flex gap-5'>
                    <div className='px-4 py-2 border-[1px] border-zinc-400 rounded-full font-light text-sm capitalize'>start the project</div>
                    <div className='w-10 h-10   border-zinc-400 rounded-full border-[1px] flex items-center justify-center'>
                        <span className='rotate-[45deg]'>
                            <FaLongArrowAltUp />
                        </span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing