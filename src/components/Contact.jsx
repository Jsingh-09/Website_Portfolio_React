import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <div className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#6fd2fa] text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Send me an email:  Jashanbhinder2@gmail.com</p>
          <p className='text-gray-300'>Contact Phone: +1 209-637-1433</p>
        </div>
        {/*<p className='text-gray-300'>Submit the form below:</p>*/}
        <form method='POST' action='https://getform.io/f/c24b0da2-804f-4287-a896-4e5ff9a27b64' className='flex flex-col'>
          <input className='bg-white p-2' type='text' placeholder='Name' name='name' />
          <input className='my-4 p-2 bg-white' type='email' placeholder='Email' name='email' />
          <textarea className='bg-white p-2' name='message' rows='10' placeholder='Message'></textarea>
          <button className='text-white border-2 hover:bg-[#6fd2fa] hover:border-[#6fd2fa] px-4 py-3 my-8 mx-auto flex items-center'>
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
