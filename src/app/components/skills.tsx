import React from "react";
import Heading from "./heading";

interface skilldata {
  heading: string;
}

const getSkilldata: Array<skilldata> = [
  {
    heading: "HTML5",
  },
  {
    heading: "CSS3",
  },
  {
    heading: "JavaScript",
  },
  {
    heading: "TypeScript",
  },
  {
    heading: "Tailwind CSS",
  },
  {
    heading: "Next JS 13",
  },
  {
    heading: "GitHub",
  },
];

const Skills = () => {
  return (
    <section id="Skills" className="mx-auto py-8 px-10">

      <Heading title="Skills" />

        
       <div className=" mt-5 mb-10 max-w[500px] ml-3">
       <p className=" text-slate-600">
       My knowledge extends to building dynamic and responsive websites, implementing interactive features, and leveraging modern frameworks and libraries. With these skills, I can create visually appealing and engaging digital experiences that deliver seamless user interactions and stunning visual aesthetics.
      </p>
       </div>
     
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
        {getSkilldata.map((item, idex) => {
          return (
            <div className="ml-3">
              {item.heading}
              <div className="relative bg-gray-400 h-[8px] mt-2 ">
                <div className="bg-[#ff4d41] h-[8px] w-[90%]"></div>
              </div>
            </div>
          );
        })}
        {/* <div>
                HTML5
                <div className='relative bg-gray-400 h-[8px] mt-2'>
                    <div className='bg-[#ff4d41] h-[8px] w-[90%]'></div>
                </div>
            </div>
            
            <div>
                CSS3
                <div className='relative bg-gray-400 h-[8px] mt-2'>
                    <div className=' bg-yellow-400 h-[8px] w-[70%]'></div>
                </div>
            </div>
            
            <div>
                JavaScript
                <div className='relative bg-gray-400 h-[8px] mt-2'>
                    <div className=' bg-blue-600 h-[8px] w-[60%]'></div>
                </div>
            </div>
            
            <div>
                TypeScript
                <div className='relative bg-gray-400 h-[8px] mt-2'>
                    <div className=' bg-green-600 h-[8px] w-[40%]'></div>
                </div>
            </div>
            <div>
                Tailwind CSS
                <div className='relative bg-gray-400 h-[8px] mt-2'>
                    <div className=' bg-purple-600 h-[8px] w-[60%]'></div>
                </div>
            </div>

            <div>
                Next.Js 13
                <div className='relative bg-gray-400 h-[8px] mt-2'>
                    <div className=' bg-orange-300 h-[8px] w-[40%]'></div>
                </div>
            </div> */}
      </div>
    </section>
  );
};

export default Skills;
