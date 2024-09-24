"use client"
import React, { useState } from "react";
import Heading from "./heading";

interface SkillData {
  heading: string;
  percentage: string;
}

const skillData: Array<SkillData> = [
  { heading: "HTML5", percentage: "90" },
  { heading: "CSS3", percentage: "85" },
  { heading: "JavaScript", percentage: "70" },
  { heading: "TypeScript", percentage: "70" },
  { heading: "Tailwind CSS", percentage: "75" },
  { heading: "Bootstrap", percentage: "80" },
  { heading: "React JS", percentage: "80" },
  { heading: "Next JS", percentage: "75" },
  { heading: "Node.js", percentage: "60" },
  { heading: "Express.js", percentage: "60" },
  { heading: "MongoDB", percentage: "75" },
  { heading: "MySQL", percentage: "85" },
  { heading: "Canva Designing", percentage: "75" },
  { heading: "Crystal Report", percentage: "70" },
  { heading: "Sanity CMS", percentage: "60" },
  { heading: "ERP SAP B1", percentage: "85" },
  { heading: "Git/GitHub", percentage: "70" },
];

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="Skills"
      className="mx-auto py-12 px-6 md:px-12 lg:px-20 bg-gray-50 transition-transform duration-300"
    >
      {/* Heading */}
      <Heading title="Skills" />

      {/* Description */}
      <div className="max-w-[700px] mt-6 mb-10 mx-auto">
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
          <div
            className="mb-4 hover:scale-105 transition-transform duration-300"
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Skill Title */}
            <div className="text-lg font-semibold text-slate-700 mb-2 flex justify-between items-center">
              <span>{item.heading}</span>
              <span className="text-sm text-gray-500">{item.percentage}%</span>
            </div>

            {/* Progress Bar */}
            <div className="relative bg-gray-200 h-[8px] rounded-full overflow-hidden">
              <div
                className={`absolute top-0 left-0 h-full bg-[#ff4d41] rounded-full transition-all duration-500 ease-in-out`}
                style={{
                  width: hoveredIndex === index ? `${item.percentage}%` : "0%",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
