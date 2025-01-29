
import React from 'react';

const OurProcess = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-blue-900 uppercase">Our Process</h2>
        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
        <p className="mt-4 text-lg font-bold text-blue-900 uppercase">
          We guide you through every step of connecting with the right investors and securing the funding you need.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 "data-aos="fade-down" data-aos-delay="600">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center ">
            <div className="text-4xl text-indigo-600 mb-4">
              <i className="fas fa-user-edit"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Sign Up & Profile Creation</h3>
            <p className="mt-2 text-gray-600">
              Start your journey by creating a detailed profile to help us understand your needs and preferences.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl text-indigo-600 mb-4">
              <i className="fas fa-random"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Tailored Matching</h3>
            <p className="mt-2 text-gray-600">
              Our algorithm matches you with the right investors based on your business goals and values.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl text-indigo-600 mb-4">
              <i className="fas fa-comments"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Explore & Connect</h3>
            <p className="mt-2 text-gray-600">
              Browse profiles and directly connect with investors or startups to discuss opportunities.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl text-indigo-600 mb-4">
              <i className="fas fa-handshake"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Pitch & Collaborate</h3>
            <p className="mt-2 text-gray-600">
              Present your ideas, collaborate, and refine your pitch with the help of mentors.
            </p>
          </div>

          {/* Step 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl text-indigo-600 mb-4">
              <i className="fas fa-dollar-sign"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Secure Funding & Mentorship</h3>
            <p className="mt-2 text-gray-600">
              Finalize your deal, secure funding, and gain strategic guidance to take your business to the next level.
            </p>
          </div>

          {/* Step 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl text-indigo-600 mb-4">
              <i className="fas fa-network-wired"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Ongoing Support & Networking</h3>
            <p className="mt-2 text-gray-600">
              Continue to access workshops, networking events, and expert advice to ensure your growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
