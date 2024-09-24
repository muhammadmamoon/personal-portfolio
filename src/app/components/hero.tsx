"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import Button from "../button";
import Image from "next/image";
import mypic from "@/app/images/mypic4.png";

function Hero() {
  return (
    <section
      id="Home"
      className="bg-gradient-to-b from-black via-gray-900 to-gray-800 min-h-[90vh] lg:min-h-[85vh] bg-fixed flex flex-col justify-center py-[80px] lg:py-0" // Adjusted height for large screens
    >
      {/* Main Container */}
      <div className="flex flex-col items-center gap-y-10 px-4 lg:flex-row lg:justify-around lg:mt-16"> {/* Added margin-top for large screens */}
        
        {/* Image container for small screens */}
        <div className="lg:hidden flex justify-center items-center mb-10">
          <Image
            src={mypic}
            alt="hero section pic"
            className="border-4 border-red-700 rounded-full shadow-lg w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Content Container */}
        <div className="text-white max-w-[550px] flex flex-col items-start gap-6 lg:ml-8 text-center lg:text-left">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-red-500">
            I&apos;M Muhammad Mamoon
          </h1>

          {/* Typewriter Effect */}
          <div className="text-lg sm:text-2xl md:text-3xl mt-3 font-medium text-gray-300">
            <Typewriter
              options={{
                strings: [
                  "MERN Stack Developer",
                  "SAP B1 Consultant",
                  "Crystal Report Developer",
                  "Freelancer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          {/* Decorative line */}
          <div className="bg-red-500 h-[4px] w-[50px] mt-4 mx-auto lg:mx-0"></div>

          {/* Paragraph with better spacing */}
          <p className="sm:text-lg md:text-xl text-gray-300 leading-relaxed mt-4">
            As a MERN stack developer and SAP B1 consultant, I offer
            professional services to build dynamic, visually appealing, and
            responsive websites. With expertise in modern technologies like
            HTML5, CSS3, JavaScript, React.js, Next.js, Tailwind CSS, and 
            more, I ensure seamless user experiences and robust functionality. 
            Let&apos;s collaborate to bring your digital vision and business solutions to life!
          </p>

          {/* Call to Action Button */}
          <div className="mt-6">
            <Button
              link="#About"
              text="Learn More"
            className="bg-gradient-to-r from-red-500 to-orange-400 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Image container for larger screens */}
        <div className="hidden lg:flex justify-center items-center">
          <Image
            src={mypic}
            alt="hero section pic"
            className="border-4 border-red-700 rounded-full shadow-lg w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
