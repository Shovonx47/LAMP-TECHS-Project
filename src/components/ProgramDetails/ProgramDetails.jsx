import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const ProgramDetails = ({ details }) => {
  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-gray-300 pb-2">Program Details</h2>
      
      <div className="text-gray-700 mb-4">
        <h3 className="text-xl font-semibold mb-2">Description</h3>
        <p>{details.description}</p>
      </div>

      <div className="text-gray-700 mb-4">
        <h3 className="text-xl font-semibold mb-2">Objectives</h3>
        <ul className="list-disc list-inside">
          {details.objectives.map((obj, index) => (
            <li key={index} className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" /> {obj}
            </li>
          ))}
        </ul>
      </div>

      <div className="text-gray-700 mb-4">
        <h3 className="text-xl font-semibold mb-2">Benefits</h3>
        <ul className="list-disc list-inside">
          {details.benefits.map((benefit, index) => (
            <li key={index} className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" /> {benefit}
            </li>
          ))}
        </ul>
      </div>

      <div className="text-gray-700">
        <h3 className="text-xl font-semibold mb-2">Requirements</h3>
        <ul className="list-disc list-inside">
          {details.requirements.map((req, index) => (
            <li key={index} className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" /> {req}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProgramDetails;
