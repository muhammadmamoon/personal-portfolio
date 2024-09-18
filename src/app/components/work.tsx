import React from 'react';
import Heading from './heading';
import Image from 'next/image';
import Link from 'next/link';

// Import your images
import work1 from "@/app/images/work1.png";
import work2 from "@/app/images/work2.jpg";
import work3 from "@/app/images/work3.jpg";
import work4 from "@/app/images/work4.jpg";
import work5 from "@/app/images/work5.jpg";
import work6 from "@/app/images/work6.png";
import work7 from "@/app/images/work7.png";
import work8 from "@/app/images/work8.png";

const workData = [
  {
    src: work1,
    alt: "Illdy Clone Website",
    link: "https://illdy-mamoon.netlify.app/",
    title: "Clone Website"
  },
  {
    src: work2,
    alt: 'Countdown Timer App',
    link: 'https://count-down-timer-mamoon.netlify.app',
    title: 'Countdown Timer'
  },
  {
    src: work3,
    alt: 'Voice-Inator Project',
    link: 'https://voice-inator-mamoon.netlify.app',
    title: 'Voice-Inator'
  },
  {
    src: work4,
    alt: 'Music Player App',
    link: 'https://remix-player.netlify.app',
    title: 'Music Player'
  },
  {
    src: work5,
    alt: 'Wall Clock App',
    link: 'https://clock02.netlify.app/',
    title: 'Wall Clock'
  },
  {
    src: work6,
    alt: 'Mole Game Project',
    link: 'https://mole-game-mamoon.netlify.app/',
    title: 'Game'
  },{
    src: work7,
    alt: 'IT Consultant &#39;Service Provider',
    link: 'https://iblaaqisol.vercel.app/',
    title: 'IBLAAQISOL'
  },
  {
    src: work8,
    alt: 'Karachi Revolution Skating Club',
    link: 'https://karachi-revolution-club.vercel.app/',
    title: 'Sports'
  }
];

const Work = () => {
  return (
    <section id="Project" className="mx-auto py-12 px-4 md:px-8 lg:px-16">
      {/* Heading */}
      <Heading title="Creative Works" />

      {/* Work Gallery */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {workData.map((work, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
            {/* Image */}
            <Image
              src={work.src}
              alt={work.alt}
              className="transition-transform duration-500 transform group-hover:scale-105"
              layout="responsive"
              objectFit="cover"
              quality={75}
            />

            {/* Overlay with Link */}
            <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <Link href={work.link} passHref>
                <span className="text-white text-lg font-bold hover:underline">
                  {work.title}
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
