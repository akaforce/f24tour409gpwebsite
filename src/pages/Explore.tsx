import React from 'react';
import turkishlandscape from '../images/exploreturkie.jpg';
import istanbulpic from '../images/istanbull.jpg';
import ankarapic from '../images/ankara.jpg';
import izmirpic from '../images/izmir.webp';
import antalyapic from '../images/antalya.jpg';
import hagiapic from '../images/hagisophia.jpg';
import cappapic from '../images/hot_air_ballooning-cappadocia.jpg';
import ephesuspic from '../images/Ephesus-Turkey.jpg';
import pamukkalepic from '../images/Travertines-Pamukkale.jpg';
import turkishfood from '../images/turkish-cuisine.webp';
import turkishculture from '../images/ethonos.jpg';



export default function Explore() {
    return (
      <div className='bg-black h-screen flex flex-col'>
          {/* Hero Section */}
          <div className='bg-red-700 relative'>
              <img 
                  src={turkishlandscape} 
                  alt='Turkish Landscape' 
                  className='w-full h-[500px] object-cover brightness-75'
              />
              <h1 className="absolute top-[35%] left-[50%] transform -translate-x-1/2 text-center text-5xl md:text-6xl lg:text-8xl text-white font-bold">Explore Turkiye</h1>
              <h2 className="absolute top-[60%] left-[50%] transform -translate-x-1/2 text-center text-2xl md:text-4xl lg:text-5xl text-yellow-400 font-bold">Discover Culture & Adventure</h2>
          </div>
  
          {/* Cities Section */}
          <div className='m-5 p-10 bg-red-800'>
              <h1 className='text-center text-7xl font-bold text-white'>Turkish Cities to Visit</h1>
              <div className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
                  <div className='p-5'>
                      <img 
                          src={istanbulpic}
                          alt='Istanbul' 
                          className='w-full h-[300px] object-cover rounded-lg'
                      />
                      <h2 className='text-center text-2xl font-semibold mt-3 text-white'>Istanbul</h2>
                      <p className='text-center text-lg mt-2 text-gray-200'>
                          A city where East meets West, featuring iconic landmarks like the Hagia Sophia and the Blue Mosque.
                      </p>
                  </div>
                  <div className='p-5'>
                      <img 
                          src={ankarapic}
                          alt='Ankara' 
                          className='w-full h-[300px] object-cover rounded-lg'
                      />
                      <h2 className='text-center text-2xl font-semibold mt-3 text-white'>Ankara</h2>
                      <p className='text-center text-lg mt-2 text-gray-200'>
                          The modern capital city of Turkiye, known for its vibrant culture and the Atatürk Mausoleum.
                      </p>
                  </div>
                  <div className='p-5'>
                      <img 
                          src={izmirpic}
                          alt='Izmir' 
                          className='w-full h-[300px] object-cover rounded-lg'
                      />
                      <h2 className='text-center text-2xl font-semibold mt-3 text-white'>Izmir</h2>
                      <p className='text-center text-lg mt-2 text-gray-200'>
                          A coastal gem with a rich history and breathtaking views of the Aegean Sea.
                      </p>
                  </div>
                  <div className='p-5'>
                      <img 
                          src={antalyapic}
                          alt='Antalya' 
                          className='w-full h-[300px] object-cover rounded-lg'
                      />
                      <h2 className='text-center text-2xl font-semibold mt-3 text-white'>Antalya</h2>
                      <p className='text-center text-lg mt-2 text-gray-200'>
                          A haven for beach lovers and history enthusiasts, home to ancient ruins and stunning beaches.
                      </p>
                  </div>
              </div>
          </div>
  
          {/* Landmarks Section */}
          <div className='m-5 p-10 bg-black'>
              <h1 className='text-center text-7xl font-bold text-red-500'>Turkish Landmarks</h1>
              <div className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
                  <div className='p-5'>
                      <img 
                          src={hagiapic}
                          alt='Hagia Sophia' 
                          className='w-full h-[300px] object-cover rounded-lg'
                      />
                      <h2 className='text-center text-2xl font-semibold mt-3 text-white'>Hagia Sophia</h2>
                      <p className='text-center text-lg mt-2 text-gray-200'>
                          A world heritage site in Istanbul, blending history, religion, and stunning architecture.
                      </p>
                  </div>
                  <div className='p-5'>
                      <img 
                          src={cappapic} 
                          alt='Cappadocia' 
                          className='w-full h-[300px] object-cover rounded-lg'
                      />
                      <h2 className='text-center text-2xl font-semibold mt-3 text-white'>Cappadocia</h2>
                      <p className='text-center text-lg mt-2 text-gray-200'>
                          Known for its fairy chimneys and hot air balloon rides, offering surreal landscapes.
                      </p>
                  </div>
                  <div className='p-5'>
                      <img 
                          src={ephesuspic} 
                          alt='Ephesus' 
                          className='w-full h-[300px] object-cover rounded-lg'
                      />
                      <h2 className='text-center text-2xl font-semibold mt-3 text-white'>Ephesus</h2>
                      <p className='text-center text-lg mt-2 text-gray-200'>
                          A treasure trove of ancient ruins, including the Temple of Artemis, one of the Seven Wonders.
                      </p>
                  </div>
                  <div className='p-5'>
                      <img 
                          src={pamukkalepic}
                          alt='Pamukkale' 
                          className='w-full h-[300px] object-cover rounded-lg'
                      />
                      <h2 className='text-center text-2xl font-semibold mt-3 text-white'>Pamukkale</h2>
                      <p className='text-center text-lg mt-2 text-gray-200'>
                          Famous for its travertine terraces and thermal springs, a natural wonder not to be missed.
                      </p>
                  </div>
              </div>
          </div>
  
          {/* Culture and Food Section */}
          <div className='m-5 p-10 bg-red-800'>
              <h1 className='text-center text-7xl font-bold text-white'>Turkish Culture & Food</h1>
              <div className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
                  <div className='p-5'>
                      <img 
                          src={turkishfood}
                          alt='Turkish Food' 
                          className='w-full h-[300px] object-cover rounded-lg'
                      />
                      <h2 className='text-center text-2xl font-semibold mt-3 text-white'>Food & Cuisine</h2>
                      <p className='text-center text-lg mt-2 text-gray-200'>
                          Savor delicacies like kebabs, baklava, and Turkish delight. Enjoy authentic street food and gourmet dishes.
                      </p>
                  </div>
                  <div className='p-5'>
                      <img 
                          src={turkishculture}
                          alt='Turkish Culture' 
                          className='w-full h-[300px] object-cover rounded-lg'
                      />
                      <h2 className='text-center text-2xl font-semibold mt-3 text-white'>Cultural Highlights</h2>
                      <p className='text-center text-lg mt-2 text-gray-200'>
                          Experience traditional Turkish music, dance, and hospitality that make every visit unforgettable.
                      </p>
                  </div>
              </div>
          </div>
      </div>
    )
  }
  