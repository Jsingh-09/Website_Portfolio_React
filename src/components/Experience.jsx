import React from 'react';

const Experience = () => {
  return (
    <div name = 'experience' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <p className='text-4xl font-bold inline'>
            <span className='border-b-4 border-[#6fd2fa]'>Experience</span>
            </p>
            <ul className='py-4'>
                <p className='font-bold'>Northrop Grumman - Software Engineer</p>
                <p className='text-[#6fd2fa] font-semibold'>San Jose, CA</p>
                <p className='text-[#6fd2fa] font-semibold'>August 2022 - Present</p>
                <ul className='list-disc pl-5'>
                    <li>Working on a Platform for AI Deployment (PAID) creating a SWaP constrained hardware/software hosting platform with GPP and GPU resources which included adding the ability to use GPUs to process data using AI/ML algorithms.</li>                </ul>
            </ul>
            <ul className='py-4'>
                <p className='font-bold'>Northrop Grumman - Software Engineer Intern</p>
                <p className='text-[#6fd2fa] font-semibold'>Colorado Springs, Colorado</p>
                <p className='text-[#6fd2fa] font-semibold'>June 2021 - July 2022</p>
                <ul className='list-disc pl-5'>
                    <li>Programmed and debugged files and scripts written in C++ and Python for the counter hypersonic campaign, which included modeling a direct communication link between flying interceptors and an overhead pLEO satellite.</li>
                </ul>
            </ul>
            <ul className='py-4'>
                <p className='font-bold'>University of California, Merced - Research Intern</p>
                <p className='text-[#6fd2fa] font-semibold'>Merced, CA</p>
                <p className='text-[#6fd2fa] font-semibold'>June 2019 - August 2019</p>
                <ul className='list-disc pl-5'>
                    <li>Developed simulations in C++ on the collective behavior of self-propelled particles, as well as groups of robots, which contributed to research for reducing the flow of traffic for cars.</li>
                </ul>
            </ul>
            <ul className='py-4'>
                <p className='font-bold'>California State University, Stanislaus - Research Assistant</p>
                <p className='text-[#6fd2fa] font-semibold'>Turlock, CA</p>
                <p className='text-[#6fd2fa] font-semibold'>August 2018 - May 2022</p>
                <ul className='list-disc pl-5'>
                    <li>Designed a smart home solution using Internet of Things (IoT) with different sensors such as Arduino Mega 2560 and Arduino Yun to send data to Google Cloud Platform servers.</li>
                </ul>
            </ul>
        </div>
    </div>
  );
}

export default Experience;
