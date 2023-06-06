import React from 'react';

const Experience = () => {
  return (
    <div name = 'experience' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <p className='text-4xl font-bold inline'>
            <span className='border-b-4 border-[#6fd2fa]'>Experience</span>
            </p>
            <ul className='list-disc pl-8 py-4'>
                <li>
                <p className='font-semibold'>Northrop Grumman</p>
                <p>San Jose, CA</p>
                <p className='font-bold'>Software Engineer</p>
                <p>August 2022 - Present</p>
                <p>Working on a Platform for AI Deployment (PAID) creating a SWaP constrained hardware/software hosting platform with GPP and GPU resources which included adding the ability to use GPUs to process data using AI/ML algorithms.</p>
                </li>
            </ul>
            <ul className='list-disc pl-8 py-4'>
                <li>
                <p className='font-semibold'>Northrop Grumman</p>
                <p>Colorado Springs, Colorado</p>
                <p>Software Engineer Intern</p>
                <p>June 2021 - July 2022</p>
                <p>Programmed and debugged files and scripts written in C++ and Python for the counter hypersonic campaign, which included modeling a direct communication link between flying interceptors and an overhead pLEO satellite.</p>
                </li>
            </ul>
            <ul className='list-disc pl-8 py-4'>
                <li>
                <p className='font-semibold'>University of California, Merced</p>
                <p>Merced, CA</p>
                <p>Research Intern</p>
                <p>June 2019 - August 2019</p>
                <p>Developed simulations in C++ on the collective behavior of self-propelled particles, as well as groups of robots, which contributed to research for reducing the flow of traffic for cars.</p>
                </li>
            </ul>
            </div>
    </div>
  );
}

export default Experience;
