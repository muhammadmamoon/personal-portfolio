"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import Button from "../button";
import Image from "next/image";
import mypic from "@/app/images/mypic4.png";
import Link from "next/link";

function Hero() {
  return (
    <section id="Home" className="bg-black  h-screen bg-cover bg-fixed border border-green-400 flex flex-col justify-center ">
      {/* main dev */}
      <div className=" flex flex-col justify-center items-center gap-y-10 lg:flex-row xl:flex-row md:justify-around xl:justify-around">
        {/* content dev */}
        <div className=" ml-8">
          <div className=" max-w-[550px] flex flex-col text-white gap-[40px]">
            <div className="flex flex-col sm:justify-center">
              <div className="text-xl sm:text-2xl md:3xl">
                I&apos;M Muhammad Mamoon
              </div>
              <div className="text-xl sm:text-2xl md:3xl mt-3">
                <Typewriter
                  options={{
                    strings: ["SAP Consultant","Web Developer", "Freelancer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
            <div className="bg-red-700 h-[4px] w-[40px]"></div>
            <div>
              <p className=" mr-6 sm:text-xl md:2xl">
              I'm Muhammad Mamoon, a BSCS graduate and SAP consultant at Crown Company, excelling as a freelance developer. I specialize in HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, Node.js, Express.js, MongoDB, MySQL, and Crystal Reports. Committed to quality and continuous learning, I deliver innovative and efficient solutions for my clients.
              </p>
              <Button link="/Home" text="learn more" />
              
            </div>
          </div>
        </div>
        {/* picture dev */}
        <div className=" flex flex-col justify-center items-center mt-10  -order-1 lg:order-1 xl:order-1 ">
          <Image
            src={mypic}
            alt="hero section pic"
            className=" border-2 border-red-700  rounded-full w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
