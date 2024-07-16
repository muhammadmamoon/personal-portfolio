import React from "react";
import Heading from "./heading";

interface skilldata {
  heading: string;
  percentage:string;
  
}

const getSkilldata: Array<skilldata> = [
  {
    heading: "HTML5",
    percentage:'w-[90%]'
  },
  {
    heading: "CSS3",
    percentage:'w-[85%]'
  },
  {
    heading: "JavaScript",
    percentage:'w-[70%]'
  },
  {
    heading: "TypeScript",
    percentage:'w-[70%]'
  },
  {
    heading: "Tailwind CSS",
    percentage:'w-[75%]'
  },
  {
    heading: "React Js",
    percentage:'w-[70%]'
  },
  {
    heading: "Next JS 13",
    percentage:'w-[75%]'
  },
  {
    heading: "Node Js",
    percentage:'w-[70%]'
  },
  {
    heading: "Express",
    percentage:'w-[60%]'
  },
  {
    heading: "MySQL",
    percentage:'w-[85%]'
  },
  {
    heading: "MongoDB",
    percentage:'w-[60%]'
  },
  {
    heading: "Crystal Report",
    percentage:'w-[85%]'
  },
  {
    heading: "SAP Business One",
    percentage:'w-[75%]'
  },
  {
    heading: "Git/GitHub",
    percentage:'w-[60%]'
  },
];

const Skills = () => {
  return (
    <section id="Skills" className="mx-auto py-8 px-10">

      <Heading title="Skills" />

        
       <div className=" mt-5 mb-10 max-w[500px] ml-3">
       <div className=" text-slate-600">
       My knowledge extends to building dynamic and responsive websites, implementing interactive features, and leveraging modern frameworks and libraries. With these skills, I can create visually appealing and engaging digital experiences that deliver seamless user interactions and stunning visual aesthetics.
      </div>
       </div>
     
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
        {getSkilldata.map((item, idex) => {
          return (
            <div className="ml-3" key={idex}>
              {item.heading}
              <div className="relative bg-gray-400 h-[8px] mt-2 ">
                <div className={`bg-[#ff4d41] h-[8px] ${item.percentage}`}></div>
              </div>
            </div>
          );
        })}
      
      </div>
    </section>
  );
};

export default Skills;
