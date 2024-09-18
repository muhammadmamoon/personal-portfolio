import React from "react";
import Heading from "./heading";
import bg from "@/app/images/mamoon.jpg";
import Image from "next/image";
import Button from "../button";

function About() {
  return (
    <section id="About" className="mx-auto py-8 px-4">
      <div className="ml-8">
        <Heading title="About Me" />
      </div>

      <div className="flex flex-col md:flex-row md:justify-around gap-8">
        {/* Image section */}
        <div className="flex justify-center md:justify-start">
          <Image
            className="rounded-lg shadow-lg w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]"
            src={bg}
            alt="Muhammad Mamoon"
          />
        </div>

        {/* Content section */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left max-w-[550px] md:ml-8 mt-8">
          <h1 className="text-3xl font-bold my-4 text-black">Muhammad Mamoon</h1>
          <p className="text-slate-700 text-lg leading-relaxed">
            I am a MERN stack developer and SAP B1 consultant with expertise in
            HTML5, CSS3, JavaScript, React.js, Next.js, Tailwind CSS, TypeScript,
            Bootstrap, Node.js, Express.js, MongoDB, MySQL, PostgreSQL, and
            Crystal Reports. With 3 years of experience as an MIS officer at
            Artistic Milliners and currently working at Crown Group of Companies as
            a SAP B1 consultant, I bring both technical skills and real-world business
            experience to deliver dynamic, responsive websites and streamline
            business processes. Let&apos;s connect and create impactful digital
            solutions.
          </p>

          <Button link="#Contact" text="Contact Me" />
        </div>
      </div>
    </section>
  );
}

export default About;
