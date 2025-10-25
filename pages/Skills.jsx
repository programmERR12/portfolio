import React from 'react'
import expertise from "../rawData/skillsInfo";
function Skills() {
  return (
    
       
      <section id="skills"  className="bg-[#1e1e24] text-white flex flex-col items-center justify-center px-6 py-16 md:py-20 ">
        <h1 className="text-3xl font-bold text-green-400 mb-10">
          Technical Expertise
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="border border-green-400/30 rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition-all duration-300 hover:shadow-green-500/30"
            >
              <h2 className="text-2xl font-semibold text-green-400 mb-3">
                {item.title}
              </h2>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    
  )
}

export default Skills
