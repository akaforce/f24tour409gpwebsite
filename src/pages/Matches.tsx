import React from 'react'
import fanscheering from '../images/supporters.jpg';
import ataturk from '../images/ataturkstad.jpg';
import ramspark from '../images/ramsstad.jpg';
import sukru from '../images/sukru.jpg';
import vodafone from '../images/vodafone_arena03.jpg';

export default function Matches() {
    return (
      <div className='bg-black h-screen flex flex-col'>
          {/* Hero Section */}
          <div className='bg-red-700 relative'>
              <img 
                  src={fanscheering} 
                  alt='Fans Cheering' 
                  className='w-full h-[500px] object-cover brightness-75'
              />
              <h1 className='absolute top-[150px] left-[33%] text-center text-9xl text-white font-bold'>Match Day</h1>
              <h2 className='absolute top-[250px] left-[32%] text-center text-7xl text-yellow-400 font-bold'>FIFA 2026 in Turkiye</h2>
          </div>
  
          {/* Stadiums Section */}
          <div className='m-5 p-10 bg-red-800'>
              <h1 className='text-center text-7xl font-bold text-white'>Stadiums</h1>
              <div className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
                  <div className='p-5'>
                      <img 
                          src={ataturk}
                          alt='Ataturk Olympic Stadium' 
                          className='w-full h-[300px] object-cover rounded-lg'
                      />
                      <h2 className='text-center text-2xl font-semibold mt-3 text-white'>Atatürk Olympic Stadium</h2>
                      <p className='text-center text-xl mt-2 text-gray-200'>
                          Capacity: 75,145. The main stadium in Istanbul, known for hosting the 2005 and 2023 UEFA Finals. Located in the Başakşehir district, it is 30 minutes from downtown.
                      </p>
                  </div>
                  <div className='p-5'>
                      <img 
                          src={ramspark} 
                          alt='Rams Park (Nef Stadium)' 
                          className='w-full h-[300px] object-cover rounded-lg'
                      />
                      <h2 className='text-center text-2xl font-semibold mt-3 text-white'>Rams Park (Nef Stadium)</h2>
                      <p className='text-center text-xl mt-2 text-gray-200'>
                          Capacity: 52,223. Located 18 minutes from downtown, this modern stadium features excellent acoustics and state-of-the-art facilities.
                      </p>
                  </div>
                  <div className='p-5'>
                      <img 
                          src={sukru} 
                          alt='Şükrü Saracoğlu Stadium' 
                          className='w-full h-[300px] object-cover rounded-lg'
                      />
                      <h2 className='text-center text-2xl font-semibold mt-3 text-white'>Şükrü Saracoğlu Stadium</h2>
                      <p className='text-center text-xl mt-2 text-gray-200'>
                          Capacity: 47,834. One of Turkey's oldest stadiums, close to vibrant nightlife in Kadıköy and historic Bagdat Avenue.
                      </p>
                  </div>
                  <div className='p-5'>
                      <img 
                          src={vodafone} 
                          alt='Vodafone Park' 
                          className='w-full h-[300px] object-cover rounded-lg'
                      />
                      <h2 className='text-center text-2xl font-semibold mt-3 text-white'>Vodafone Park</h2>
                      <p className='text-center text-xl mt-2 text-gray-200'>
                          Capacity: 42,590. Located just 7 minutes from downtown Istanbul, this stadium offers unmatched convenience and vibrant nearby attractions.
                      </p>
                  </div>
              </div>
          </div>
  
          {/* Match Schedule Section */}
          <div className='m-5 p-10 bg-black'>
              <h1 className='text-center text-7xl font-bold text-red-500'>Match Schedule</h1>
              <div className='mt-5 '>
                  <ul className='pl-[20%] text-4xl text-left text-gray-200 space-y-3'>
                      <li>Match 1: Istanbul - Atatürk Olympic Stadium | Group A | June 15</li>
                      <li>Match 2: Istanbul - Rams Park (Nef Stadium) | Group B | June 16</li>
                      <li>Match 3: Istanbul - Şükrü Saracoğlu Stadium | Group C | June 17</li>
                      <li>Match 4: Istanbul - Vodafone Park | Group D | June 18</li>
                  </ul>
              </div>
          </div>
  
          {/* Groups Section */}
          <div className='m-5 p-10 bg-red-800'>
              <h1 className='text-center text-7xl font-bold text-white'>Participating Groups</h1>
              <div className='mt-5 grid grid-cols-1 md:grid-cols-4 gap-5'>
                  <div className='p-5 bg-red-900 rounded-lg'>
                      <h2 className='text-center text-2xl font-semibold text-yellow-400'>Group A</h2>
                      <ul className='text-center text-4xl text-gray-200 mt-3'>
                          <li>Turkey</li>
                          <li>France</li>
                          <li>Argentina</li>
                          <li>South Korea</li>
                      </ul>
                  </div>
                  <div className='p-5 bg-red-900 rounded-lg'>
                      <h2 className='text-center text-2xl font-semibold text-yellow-400'>Group B</h2>
                      <ul className='text-center text-4xl text-gray-200 mt-3'>
                          <li>Brazil</li>
                          <li>England</li>
                          <li>Japan</li>
                          <li>Cameroon</li>
                      </ul>
                  </div>
                  <div className='p-5 bg-red-900 rounded-lg'>
                      <h2 className='text-center text-2xl font-semibold text-yellow-400'>Group C</h2>
                      <ul className='text-center text-4xl text-gray-200 mt-3'>
                          <li>Germany</li>
                          <li>Mexico</li>
                          <li>Netherlands</li>
                          <li>Australia</li>
                      </ul>
                  </div>
                  <div className='p-5 bg-red-900 rounded-lg'>
                      <h2 className='text-center text-2xl font-semibold text-yellow-400'>Group D</h2>
                      <ul className='text-center text-4xl text-gray-200 mt-3'>
                          <li>Spain</li>
                          <li>USA</li>
                          <li>Italy</li>
                          <li>Ghana</li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    )
  }
  
  
