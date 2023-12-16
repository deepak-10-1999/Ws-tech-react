import React from 'react'
import Typed from 'react-typed';
import Experts from './Experts';
import NewsLetter from './NewsLetter';
import Plans from './Plans';

const Banner = () => {

  return (
<>
    <div className="bg-[#2699fb] w-full py-[100px]">
      <div className="max-w-[1240px] mx-auto text-center font-bold my-[100px]">
         <div className='text-xl md:text-3xl md:p[24px]'>
            Learn with us
         </div>
         <h2 className='text-white text-3xl md:text-[60px] md:p-[24px]'>
            Grow with us
         </h2>
         <div className='text-[20px] md:text-[50px] md:p-[24px] text-white'>
            Learn
            <Typed
            className='pl-2'
            strings={['Web-Development','Digital Marketing','Ethical Hacking']}
            typeSpeed={100}
            loop={true}
            backSpeed={50}
            />
         </div>
         <button className='bg-black text-white p-3 rounded'>Get started</button>

      </div>
      
    </div>
    <Experts/>
    <NewsLetter/>
    <Plans/>
    </>
  )
}

export default Banner