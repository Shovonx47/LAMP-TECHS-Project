import React, { useState } from 'react';

const RegistrationSection = ({ isLoggedIn, registrationStatus }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-white p-6">
      <div className="container mx-auto text-center">
        {isLoggedIn ? (
          <>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700">
              {registrationStatus === 'Registered' ? 'You are Registered' : 'Register Now'}
            </button>
            {registrationStatus !== 'Registered' && (
              <p className="text-gray-500 mt-2">Your registration is currently {registrationStatus}</p>
            )}
          </>
        ) : (
          <div>
            <p className="text-gray-700 mb-4">You need to log in to register for this program.</p>
            <button
              onClick={handleLoginClick}
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700"
            >
              Log In
            </button>
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg text-center relative w-96">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <div className="text-green-500 text-6xl mb-4">✔</div>
            <h2 className="text-xl font-bold mb-4">Done!</h2>
            <p className="text-gray-700">You're now registered for this course.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default RegistrationSection;
