import React from "react";
import Heading from "./heading";

interface SkillData {
  heading: string;
  percentage: string;
}

const skillData: Array<SkillData> = [
  { heading: "HTML5", percentage: "w-[90%]" },
  { heading: "CSS3", percentage: "w-[85%]" },
  { heading: "JavaScript", percentage: "w-[70%]" },
  { heading: "TypeScript", percentage: "w-[70%]" },
  { heading: "Tailwind CSS", percentage: "w-[75%]" },
  { heading: "BootStrap", percentage: "w-[80%]" },
  { heading: "React JS", percentage: "w-[80%]" },
  { heading: "Next JS", percentage: "w-[75%]" },
  { heading: "Node Js", percentage: "w-[60%]" },
  { heading: "Express JS", percentage: "w-[60%]" },
  { heading: "MongoDB", percentage: "w-[75%]" },
  { heading: "MySQL", percentage: "w-[85%]" },
  { heading: "Canva Designing", percentage: "w-[75%]" },
  { heading: "Crystal Report", percentage: "w-[70%]" },
  { heading: "Sanity CMS", percentage: "w-[60%]" },
  { heading: "ERP SAP B1", percentage: "w-[85%]" },
  { heading: "Git/GitHub", percentage: "w-[70%]" },
];

const Skills = () => {
  return (
    <section id="Skills" className="mx-auto py-12 px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <Heading title="Skills" />

      {/* Description */}
      <div className="max-w-[700px] mt-6 mb-10">
        <p className="text-slate-600 text-center md:text-left">
          My knowledge extends to building dynamic and responsive websites,
          implementing interactive features, and leveraging modern frameworks
          and libraries. With these skills, I create visually appealing and
          engaging digital experiences that deliver seamless user interactions
          and stunning visual aesthetics.
        </p>
      </div>

      {/* Skill Bars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillData.map((item, index) => (
          <div className="mb-4" key={index}>
            {/* Skill Title */}
            <div className="text-lg font-semibold text-slate-700 mb-2">
              {item.heading}
            </div>

            {/* Progress Bar */}
            <div className="relative bg-gray-200 h-[8px] rounded-full">
              <div
                className={`absolute top-0 left-0 h-full ${item.percentage} bg-[#ff4d41] rounded-full`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
