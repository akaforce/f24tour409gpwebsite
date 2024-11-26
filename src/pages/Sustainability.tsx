import React from 'react';
import sustainability_istanbul from '../images/sustainability_istanbul.png';

export default function Sustainability() {
  return (
    <div className='bg-red-700 h-full flex flex-col'>
      {/* Hero Section */}
      <div className='bg-red-700 relative'>
        <img
          src={sustainability_istanbul}
          alt='Sustainability Banner'
          className='w-full h-[500px] object-cover brightness-75'
        />
        <h1 className="absolute top-[35%] left-[50%] transform -translate-x-1/2 text-center text-5xl md:text-6xl lg:text-7xl text-white font-bold">Sustainability</h1>
        <h2 className="absolute top-[50%] left-[50%] transform -translate-x-1/2 text-center text-2xl md:text-4xl lg:text-5xl text-yellow-400 font-bold">Why is sustainability important to us? Why is travelling sustainably important?</h2>
      </div>

      {/* Sustainability Points Section */}
      <div className='m-5 p-16 bg-black'>
        <h1 className='text-center text-7xl font-bold text-red-500'>
          Our Commitment to Sustainable Tourism
        </h1>
        <div className='mt-5 grid grid-cols-1 md:grid-cols-4 gap-5'>
          {/* Eco-Friendly Practices */}
          <div className='p-5 bg-red-900 rounded-lg'>
            <h2 className='text-center text-5xl font-semibold text-yellow-400'>Eco-Friendly Practices</h2>
            <p className='text-center text-2xl text-gray-200 mt-2'>
              Partnering with green-certified hotels and venues to minimize environmental impact.
            </p>
            <p className='text-center text-2xl text-gray-200 mt-2'>
              Implementing waste reduction and recycling programs at stadiums and events.
            </p>
          </div>

          {/* Sustainable Transportation */}
          <div className='p-5 bg-red-900 rounded-lg'>
            <h2 className='text-center text-4xl font-semibold text-yellow-400'>Sustainable Transportation</h2>
            <p className='text-center text-2xl text-gray-200 mt-2'>
              Encouraging public transport and ride-sharing options to reduce carbon emissions.
            </p>
            <p className='text-center text-2xl text-gray-200 mt-2'>
              Developing partnerships to provide eco-friendly transportation for fans.
            </p>
          </div>

          {/* Local Empowerment */}
          <div className='p-5 bg-red-900 rounded-lg'>
            <h2 className='text-center text-4xl font-semibold text-yellow-400'>Local Empowerment</h2>
            <p className='text-center text-2xl text-gray-200 mt-2'>
              Supporting local businesses and vendors by prioritizing regional partnerships.
            </p>
            <p className='text-center text-2xl text-gray-200 mt-2'>
              Highlighting traditional crafts, local artisans, and regional cuisines to preserve culture.
            </p>
          </div>

          {/* Carbon Offset Programs */}
          <div className='p-5 bg-red-900 rounded-lg'>
            <h2 className='text-center text-5xl font-semibold text-yellow-400'>Carbon Offset Programs</h2>
            <p className='text-center text-2xl text-gray-200 mt-2'>
              Collaborating with global organizations to offset emissions generated by travel and events.
            </p>
            <p className='text-center text-2xl text-gray-200 mt-2'>
              Promoting initiatives that invest in renewable energy and reforestation projects.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className='p-10 bg-black'>
        <h1 className='items-center text-center text-7xl inset-x-0 bottom-0 text-red-500'>
          &#9851; Travel Sustainably, Celebrate Responsibly &#9851;
        </h1>
      </div>
    </div>
  );
}
