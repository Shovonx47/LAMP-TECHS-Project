import React from 'react';
import { FaGraduationCap } from 'react-icons/fa'; 

const Sidebar = ({ relatedPrograms, resources }) => {
  return (
    <aside className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6 lg:mb-0 lg:h-screen">
      <div className=' mb-10'>
        <h2 className="text-xl font-bold mb-4">Related Programs</h2>
        {relatedPrograms.map((program, index) => (
          <div key={index} className="flex items-center mb-2">
            <FaGraduationCap className="text-gray-500 mr-2" /> 
            <a href={program.link} className="text-blue-500 underline cursor-pointer">
              {program.title}
            </a>
          </div>
        ))}
      </div>
      
      <div>
  <h2 className="text-xl font-bold mb-4">Resources</h2>
  {resources.map((resource, index) => (
    <div key={index} className="mb-3 cursor-pointer">
      <a href={resource.link} className="text-blue-500 underline">
        {resource}
      </a>
    </div>
  ))}
</div>

    </aside>
  );
};

export default Sidebar;
