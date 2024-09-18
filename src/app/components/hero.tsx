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
      className="bg-black h-screen bg-cover bg-fixed border border-green-400 flex flex-col justify-center pt-[80px]" // Added padding to prevent the name from hiding behind the navbar
    >
      {/* main container */}
      <div className="flex flex-col items-center gap-y-10 px-4 lg:flex-row lg:justify-around">
        {/* image container */}
        <div className="lg:hidden flex justify-center items-center mb-10">
          {/* Image shown on top for small devices */}
          <Image
            src={mypic}
            alt="hero section pic"
            className="border-2 border-red-700 rounded-full w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px]"
          />
        </div>

        {/* content container */}
        <div className="text-white max-w-[550px] flex flex-col items-start gap-6 lg:ml-8">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              I&#39;M Muhammad Mamoon
            </h1>
            <div className="text-xl sm:text-2xl md:text-3xl mt-3">
              <Typewriter
                options={{
                  strings: ["MERN Stack Developer", "Freelancer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <div className="bg-red-700 h-[4px] w-[40px]"></div>
          <p className="sm:text-lg md:text-xl leading-relaxed">
            As a MERN stack developer and SAP B1 consultant, I offer
            professional services to build dynamic, visually appealing, and
            responsive websites. With expertise in HTML5, CSS3, JavaScript,
            React.js, Next.js, Tailwind CSS, TypeScript, and Bootstrap, I ensure
            seamless user experiences and robust functionality. Additionally, I
            specialize in backend technologies like Node.js, Express.js, and
            database management using MongoDB, MySQL, and PostgreSQL. Let’s
            collaborate to bring your digital vision and business solutions to
            life!
          </p>
          <Button link="/about" text="learn more" />
        </div>

        {/* image container - shown after text on larger devices */}
        <div className="hidden lg:flex justify-center items-center">
          <Image
            src={mypic}
            alt="hero section pic"
            className="border-2 border-red-700 rounded-full w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
