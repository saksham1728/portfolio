'use client';

import { useState, useEffect } from 'react';

const words = ['replies', 'deals', 'signups'];

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
    <div className="bg-[#F8F9FC] min-h-screen flex md:flex-row items-center text-center px-6 py-12 sm:flex-col">
       <div>
      <h3 className="text-[#6A5ACD] font-semibold text-lg">LinkedIn Outreach Platform</h3>

      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 leading-tight">
        <div className='mb-[-30px]'>
        10× your pipeline.
        </div>
        <div className='mb-[-30px]'>
        <br /> Land more <span className="text-[#6A5ACD] transition-opacity duration-1000 ease-in-out">{words[wordIndex]}</span>.
        </div>
        <div className='mb-[-30px]'>
        <br /> Say no to manual outreach.
        </div>
      </h1>
      <p className="text-gray-600 max-w-2xl mt-14 text-lg">
        We help founders and busy sales professionals land more meetings, signups, and positive replies—without the manual grind. Let LinkedIn automation fill your pipeline so you can focus on closing deals.
      </p>
      
      {/* Buttons */}
      <div className="mt-6 flex justify-center space-x-4">
        <button className="bg-[#6A5ACD] text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-[#5848c2]">Book a demo</button>
        <button className="text-[#6A5ACD] font-medium border border-[#6A5ACD] px-6 py-3 rounded-lg hover:bg-[#6A5ACD] hover:text-white transition">30-day free trial</button>
      </div>
      </div> 
      {/* Image Placeholder */}
      <div className="mt-12 md:w-[600px] h-[500px] bg-gray-300 flex items-center justify-center rounded-lg xl:ml-20">
        {/* <span className="text-gray-500">Image Placeholder</span> */}
        <img src="../../../land-image.png" alt="properties"/>

      </div>
    </div>
 <img
    className="block md:hidden"
    src="/three-mobile.png"
    alt="properties"
  />

  {/* Display this image on medium (md) and larger screens */}
  <img
    className="hidden md:block"
    src="/three.png"
    alt="properties"
  /> 

<img
    className="block md:hidden"
    src="/darktext-mobile.png"
    alt="properties"
  />

  {/* Display this image on medium (md) and larger screens */}
  <img
    className="hidden md:block"
    src="/darktext.png"
    alt="properties"
  /> 
    
    </div>
  );
}
