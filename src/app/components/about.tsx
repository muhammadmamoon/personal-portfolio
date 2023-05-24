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
            <p className=" text-slate-600 mr-6">I am a front-end developer and MIS officer at Artistic Millner, currently studying BSCS at Ilma University. I am also learning about blockchain through PIAIC. With a passion for creating visually appealing user interfaces, I aim to leverage blockchain technology&apos;s potential to revolutionize various industries. I have a strong foundation in web development and a dedication to continuous learning. Let&apos;s connect and collaborate to create impactful digital experiences.</p>
          </div>
         
        
          
          <Button link="Contact" text="Contact Me"/>
        
          
         
        </div>
      </div>
    </section>
    </>
  );
}

export default About;
