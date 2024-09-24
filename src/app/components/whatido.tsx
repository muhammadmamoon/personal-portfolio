import React from 'react';
import Heading from './heading';

interface Data {
  heading: string;
  description: string;
}

const whatIdoData: Array<Data> = [
  {
    heading: "MERN Stack Development",
    description:
      "Expertise in building dynamic web applications using MongoDB, Express.js, React.js, and Node.js to provide seamless user experiences and robust back-end functionality."
  },
  {
    heading: "SAP B1 Consultancy",
    description:
      "Provide comprehensive consultancy for SAP Business One, streamlining business processes and integrating software solutions to boost operational efficiency."
  },
  {
    heading: "Responsive Design",
    description:
      "Ensures that websites adapt and display properly on different devices and screen sizes, providing a consistent and optimal user experience across desktops, tablets, and smartphones."
  },
  {
    heading: "Testing & Debugging",
    description:
      "Verifying the functionality and performance of the website, while debugging is the process of identifying and fixing any errors or issues in the code to ensure proper functioning."
  },
  {
    heading: "Performance Optimization",
    description:
      "Focuses on improving the speed and efficiency of a website through optimized code, reducing file sizes, caching, and other techniques for better user experience."
  },
  {
    heading: "API Integration",
    description:
      "Integrating third-party APIs for extending the functionality of web applications, including payment gateways, authentication services, and external data sources."
  },
  {
    heading: "Version Control with Git/GitHub",
    description:
      "Utilize Git for version control and GitHub for collaboration, ensuring smooth project management and team workflows in development environments."
  },
  {
    heading: "Database Management",
    description:
      "Experience with MySQL, PostgreSQL, and MongoDB for data storage, management, and efficient querying in dynamic web applications."
  }
];

const Whatido = () => {
  return (
    <section id='Services' className='mx-auto py-10 px-4 bg-gray-100'>
      <div className='text-center mb-8'>
        <Heading title="What I Do" />
      </div>

      <div className='flex flex-col items-center justify-center gap-8 md:flex-row md:flex-wrap md:gap-6'>
        {whatIdoData.map((item, idx) => {
          return (
            <div
              className='transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg border border-cyan-700 flex flex-col py-6 px-8 bg-[#ff4D41] text-white rounded-lg hover:shadow-2xl'
              key={idx}
            >
              <h3 className='text-xl font-semibold mb-2 text-center'>{item.heading}</h3>
              <p className='text-sm text-gray-200'>{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Whatido;
