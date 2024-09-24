"use client";
import React from "react";
import Heading from "./heading";
import bg from "@/app/images/mamoon.jpg";
import Image from "next/image";
import Button from "../button";

function About() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="About" className="py-12 px-6 bg-gray-50 md:px-12 lg:px-24">
      {/* Heading */}
      <div className="text-center mb-8">
        <Heading title="About Me" />
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-8">
        {/* Image section */}
        <div className="flex justify-center md:w-1/2">
          <Image
            className="rounded-lg shadow-xl w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] transition-transform duration-300 hover:scale-105"
            src={bg}
            alt="Muhammad Mamoon"
          />
        </div>

        {/* Content section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2">
          <h1 className="text-3xl font-bold my-4 text-gray-800">
            Muhammad Mamoon
          </h1>
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            I am a MERN stack developer and SAP B1 consultant with expertise in
            HTML5, CSS3, JavaScript, React.js, Next.js, Tailwind CSS, TypeScript,
            Bootstrap, Node.js, Express.js, MongoDB, MySQL, PostgreSQL, and Crystal
            Reports. With 3 years of experience as an MIS officer at Artistic Milliners
            and currently working at Crown Group of Companies as a SAP B1 consultant,
            I bring both technical skills and real-world business experience to deliver
            dynamic, responsive websites and streamline business processes. Let&#39;s connect and create impactful digital solutions.
          </p>

          {/* Call-to-Action Button */}
          <Button
            onClick={() => handleScroll("Contact")}
            text="Contact Me"
            className="bg-gradient-to-r from-red-500 to-orange-400 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
