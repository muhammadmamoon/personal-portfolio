import React from 'react'
import Heading from './heading'
import Image from 'next/image'
import work1 from "@/app/images/work1.png";
import work2 from "@/app/images/work2.jpg";
import work3 from "@/app/images/work3.jpg";
import work4 from "@/app/images/work4.jpg";
import work5 from "@/app/images/work5.jpg";
import work6 from "@/app/images/work6.png";
import Link from 'next/link';


const Work = () => {
  return (
    <section id='Project' className='mx-auto py-8 px-4'>
        <Heading title="Creative Works"/>

        <div className='grid border border-black w-[90%] ml-7  grid-cols-1 md:grid-cols-3 gap-4'>
            <div className=' relative group'>
                <Image src={work1} alt="work1"/>
                <div className=' bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white'><Link href="https://illdy-mamoon.netlify.app/">Clone Website</Link></div>
            </div>

            <div className=' relative group'>
                <Image src={work2} alt="work2"/>
                <div className=' bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white'><a href="https://count-down-timer-mamoon.netlify.app">Count Down TImer</a></div>
            </div>

            <div className='  relative group'>
                <Image src={work3} alt="work3"/>
                <div className=' bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white'><a href="https://voice-inator-mamoon.netlify.app">Voice-Inator</a></div>
            </div>

            <div className=' relative group'>
                <Image src={work4} alt="work4"/>
                <div className=' bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white'><a href="https://remix-player.netlify.app">Music Player</a></div>
            </div>

            <div className=' relative group'>
                <Image src={work5} alt="work5"/>
                <div className=' bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white'><a href="https://clock02.netlify.app/">Wall Clock</a></div>
            </div>

            <div className=' relative group'>
                <Image src={work6} alt="work6"/>
                <div className=' bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white'><Link href="https://mole-game-mamoon.netlify.app/">Game</Link></div>
            </div>
        </div>
    </section>
  )
}

export default Work
