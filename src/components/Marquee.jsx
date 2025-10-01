import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
    
  return (
    <div className='w-full  bg-[#004D43] py-10 rounded-t-xl '>
        <div className='text uppercase border-t-2 border-b-2 border-zinc-400 flex whitespace-nowrap gap-10 font-["FoundersGrotesk-Semibold"] overflow-hidden '>
            <motion.h1 className='text-[22vw] -mt-3 leading-none'>we are ochi</motion.h1>
            <motion.h1 className='text-[22vw]  -mt-3 leading-none'>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee