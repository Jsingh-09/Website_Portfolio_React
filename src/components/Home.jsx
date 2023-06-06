import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name= 'home' className= 'w-full h-screen bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#6fd2fa] text-2xl'>Hi! my name is </p>
            <h1 className='text-5xl sm:text-7xl font-bold text-white'>Jashandeep Singh</h1>
            <h2 className='text-5xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Software Engineer at Northrop Grumman.</h2>
            <p className='text-[#8892b0] text-1.5xl py-4 max-w-[700px]'>I have my Bachelors in Computer Science from California State University, Stanislaus.</p>
            <a href='https://github.com/Jsingh-09'>
                <div>
                    <button className='text-white font-bold border-2 px-6 py-3 flex items-center hover:bg-[#6fd2fa] hover:border-[#6fd2fa]'>View Work <HiArrowNarrowRight className='ml-3 hover:' /> </button>
                </div>
            </a>
        </div>
    </div>
  )
}

export default Home