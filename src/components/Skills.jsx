import React from 'react'

import Java from '../assets/java.jpeg';
import Github from '../assets/github.png';
import Javascript from '../assets/javascript.png';
import Python from '../assets/python.jpeg';
import C from '../assets/c++.png';
import HTML from '../assets/html.png'

const Skills = () => {
  return (
    <div name = 'skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#6fd2fa]'>Skills</p>
                <p className= 'py-4'>These are the technologies I've worked with in the past:</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-4 '>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Java} alt = "Java Icon" />
                    <p className='my-4'>JAVA</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={C} alt = "Java Icon" />
                    <p className='my-4'>C++</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-transparent'>
                    <img className='w-20 mx-auto' src={HTML} alt = "Java Icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Python} alt = "Java Icon" />
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Javascript} alt = "Java Icon" />
                    <p className='my-4'>Javascipt</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt = "Java Icon" />
                    <p className='my-4'>Github</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills