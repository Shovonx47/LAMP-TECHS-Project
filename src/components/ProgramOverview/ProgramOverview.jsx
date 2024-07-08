
import React from 'react';

const ProgramOverview = ({ title, description, duration, location, deadline, bannerImage }) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <img src={bannerImage} alt="Program Banner" className="w-full h-70 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="text-gray-600">
          <span className="mr-4">Duration: {duration}</span>
          <span className="mr-4">Location: {location}</span>
          <span>Deadline: {deadline}</span>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;
