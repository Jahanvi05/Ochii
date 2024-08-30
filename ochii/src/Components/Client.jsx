import React from 'react'

const Client = () => {
  return (
    <div className='w-full h-full py-10  bg-zinc-950'>
        <h1 className='text-5xl font-normal font-["Neue Montreal"] px-10'>Client's reviews</h1>

<div className='border-zinc-700 border-solid border-[1px] mt-[55px] mb-2'></div>
        <div className='flex px-10 services gap-52'>
            <div>
                <p>Karman ventures</p>
            </div>
            <div className='w-full'>
               <p>Services</p> 
               <div>
               <button className='rounded-xl border-solid border border-white px-5 py-1 uppercase mt-16 text-[12px]'>investor deck</button>
              </div>
              <div>
               <button className='rounded-full border-solid border border-white px-3 py-1 uppercase mt-4 '>sales deck</button>
               </div>
            </div>
            <div>
                <p>William Barness</p>
                <img src="" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, maxime! Assumenda officia harum nostrum nulla? Numquam tenetur earum placeat quam nesciunt necessitatibus tempore hic illum ipsum nisi ipsa, corrupti animi.</p>
            </div>
            <div className='ml-28'>
                <p className='text-zinc-600'>READ</p>
            </div>
        </div>
    </div>
  )
}

export default Client