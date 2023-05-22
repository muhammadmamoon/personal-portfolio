import React from 'react'
import { icons } from 'react-icons/lib'
import Heading from './heading'
import Link from 'next/link';

interface data{
    heading:string;
    description:string
}

const whatIdoData: Array<data> = [
    {
      heading:"Responsive Design",
      description:"ensures that websites adapt and display properly on different devices and screen sizes, providing a consistent and optimal user experience across desktops, tablets, and smartphones."
    },
    {
        heading:"Testing & Debugging",
        description:"verifying the functionality and performance of the website, while debugging is the process of identifying and fixing any errors or issues in the code to ensure proper functioning."
      },
      {
        heading:"Performance Optimization",
        description:"focuses on improving the speed and efficiency of a website. It involves optimizing code, reducing file sizes, caching, and other techniques to enhance loading times and overall performance for better user experience."
      },
  ];

const Whatido =()=> {
  return (
    <section id='Services' className='mx-auto py-8 px-4'>
    <div>
    <Heading title="What I Do"/>    
    </div> 
<div className=' flex flex-col items-center justify-center md:flex-row gap-8 md:mr-8'>
  

         {whatIdoData.map((item,idx)=>{
            return <div className=' shadow-lg border border-cyan-700 flex ml-9 w-[300px] flex-col  py-6 px-8 bg-[#ff4D41] text-white hover:shadow-gray-500 hover:cursor-pointer'>
            <h2 className=' text-black text-xl mb-1'>{item.heading}</h2>
            <p>{item.description}</p>
        </div>
          })}
          
</div>
    </section>
     )
}

export default Whatido