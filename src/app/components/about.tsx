import React from "react";
import Heading from "./heading";
import bg from "@/app/images/mamoon.jpg";
import Image from "next/image";
import Button from "../button";
import Link from "next/link";

function About() {
  return (
    <>
    <section id="About" className="mx-auto py-8 px-4 ">
      <div className="ml-8">
      <Heading title="About me" />
      </div>
      
      <div className=" flex flex-col justify-center items-center md:flex-row md:justify-around xl:flex-row xl:justify-around ">
        <div className="">
          <Image className=" w-[200px] md:w-[300px] xl:w-[300px]" src={bg} alt="my pic" />
        </div>
        <div className="flex flex-col items-center "> 
          <div className=" max-w-[550px] ml-8 mt-8">
            <h1 className=" flex justify-center my-4 font-bold">Muhammad Mamoon</h1>
            <p className=" text-slate-600 mr-6">I'm Muhammad Mamoon, a BSCS graduate and SAP consultant at Crown Company, excelling as a freelance developer. I specialize in HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, Node.js, Express.js, MongoDB, MySQL, and Crystal Reports. Committed to quality and continuous learning, I deliver innovative and efficient solutions for my clients.</p>
          </div>
         
        
          
          <Button link="Contact" text="Contact Me"/>
        
          
         
        </div>
      </div>
    </section>
    </>
  );
}

export default About;
