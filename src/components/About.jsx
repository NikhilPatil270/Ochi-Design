import React from 'react'
import logo from "../assets/img1.jpg"

const About = () => {
    
  return (
    <div className='w-full py-20 bg-[#ceea66] rounded-t-xl text-black font-["NeueMontreal-Regular"]  p-20 tracking-tight'> 
        <h1 className='text-5xl' >We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.</h1>
        <div className='w-full border-t-2 border-[#99af47] mt-10 pt-5 flex gap-5'>
            <div className='w-1/2 '>
            <h1 className='text-5xl '>Our approach:</h1>
            <button className='mt-10 px-10 py-6  rounded-full bg-zinc-900 text-white flex items-center gap-5 uppercase'>Read More 
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
            </button>
            </div>
            
            <img  className='w-1/2 h-[60vh] rounded-3xl' src={logo} alt="logo" />
        </div>
    </div>
  )
}

export default About