import React from 'react';
import mediapic from '../images/media.webp';

export default function Media() {
    return (
      <div className='bg-black h-screen flex flex-col'>
          {/* Hero Section */}
          <div className='bg-red-700 relative'>
              <img 
                  src={mediapic}
                  alt='Media Banner' 
                  className='w-full h-[500px] object-cover brightness-75'
              />
           
              <h1 className="absolute top-[15%] left-[50%] transform -translate-x-1/2 text-center text-5xl md:text-6xl lg:text-7xl text-white font-bold">Media and Press</h1>
              <h2 className="absolute top-[45%] left-[50%] transform -translate-x-1/2 text-center text-xl md:text-4xl lg:text-5xl text-yellow-400 font-bold">Discover our marketing strategies, influencers, and media coverage for FIFA 2026 in Turkiye.</h2>
          </div>
  
          {/* Marketing Strategies Section */}
          <div className='m-5 p-10 bg-red-800'>
              <h1 className='text-center text-4xl font-bold text-white'>Marketing Strategies</h1>
              <div className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
                  <div className='p-5'>
                      <h2 className='text-4xl font-semibold text-white'>Social Media Campaigns</h2>
                      <p className='text-lg text-gray-200 mt-3'>
                          Platforms: Instagram, TikTok, Twitter. Using hashtags like #FIFA2026Turkiye and #BoysTrip to create buzz.
                      </p>
                  </div>
                  <div className='p-5'>
                      <h2 className='text-4xl font-semibold text-white'>Promotions and Giveaways</h2>
                      <p className='text-lg text-gray-200 mt-3'>
                          Free tickets for early sign-ups, contests with FIFA merchandise, and countdown offers for fans.
                      </p>
                  </div>
                  <div className='p-5'>
                      <h2 className='text-4xl font-semibold text-white'>3D Interactive Billboards</h2>
                      <p className='text-lg text-gray-200 mt-3'>
                          Featuring FIFA and Turkish cultural visuals in key cities like London, New York, and Paris.
                      </p>
                  </div>
                  <div className='p-5'>
                      <h2 className='text-4xl font-semibold text-white'>Collaborations</h2>
                      <p className='text-lg text-gray-200 mt-3'>
                          Partnerships with travel influencers, bloggers, and media outlets to amplify reach.
                      </p>
                  </div>
              </div>
          </div>
  
          {/* Influencers Section */}
          <div className='m-5 p-10 bg-black'>
              <h1 className='text-center text-4xl font-bold text-red-500'>Influencers</h1>
              <div className='mt-5 grid grid-cols-1 md:grid-cols-3 gap-5'>
                  <div className='p-5 bg-red-900 rounded-lg'>
                      <h2 className='text-center text-4xl font-semibold text-yellow-400'>Viktoriya Sener</h2>
                      <p className='text-center text-lg text-gray-200 mt-2'>
                          Travel and lifestyle influencer known for showcasing Turkish culture and experiences.
                      </p>
                  </div>
                  <div className='p-5 bg-red-900 rounded-lg'>
                      <h2 className='text-center text-4xl font-semibold text-yellow-400'>Serif Yenen</h2>
                      <p className='text-center text-lg text-gray-200 mt-2'>
                          Renowned cultural guidebook author and expert on Turkish history and tourism.
                      </p>
                  </div>
                  <div className='p-5 bg-red-900 rounded-lg'>
                      <h2 className='text-center text-4xl font-semibold text-yellow-400'>Tom Brosnahan</h2>
                      <p className='text-center text-lg text-gray-200 mt-2'>
                          Travel writer focusing on Turkey’s rich cultural heritage and vibrant landmarks.
                      </p>
                  </div>
              </div>
          </div>
  
          {/* Media Partners Section */}
          <div className='m-5 p-10 bg-red-800'>
              <h1 className='text-center text-4xl font-bold text-white'>Media Partners</h1>
              <div className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
                  <div className='p-5'>
                      <h2 className='text-4xl font-semibold text-white'>BBC Travel</h2>
                      <p className='text-lg text-gray-200 mt-3'>
                          Coverage on cultural and sports tourism during FIFA 2026 in Turkiye.
                      </p>
                  </div>
                  <div className='p-5'>
                      <h2 className='text-4xl font-semibold text-white'>National Geographic</h2>
                      <p className='text-lg text-gray-200 mt-3'>
                          Highlighting Turkish landmarks, local experiences, and eco-tourism efforts.
                      </p>
                  </div>
                  <div className='p-5'>
                      <h2 className='text-4xl font-semibold text-white'>The Guardian</h2>
                      <p className='text-lg text-gray-200 mt-3'>
                          Featuring in-depth articles on the intersection of football and Turkish culture.
                      </p>
                  </div>
                  <div className='p-5'>
                      <h2 className='text-4xl font-semibold text-white'>CNN Travel</h2>
                      <p className='text-lg text-gray-200 mt-3'>
                          Global promotion of Turkish hospitality and tourism through FIFA 2026 events.
                      </p>
                  </div>
              </div>
          </div>
  
          <div className='m-5 p-10 bg-black'>
              <h1 className='text-center text-4xl font-bold text-red-500'>News Headlines About Us</h1>
              <div className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
                  <div className='p-5 bg-red-900 rounded-lg'>
                      <h2 className='text-center text-2xl font-semibold text-yellow-400'>
                          “Experience Istanbul Beyond Football”
                      </h2>
                      <p className='text-center text-lg text-gray-200 mt-2'>
                          Explore the rich history, vibrant culture, and culinary delights of Istanbul during FIFA 2026.
                      </p>
                      <p className='text-center font-bold text-2xl text-gray-200 mt-2'>
                          Wall Street Journal
                      </p>
                  </div>
                  <div className='p-5 bg-red-900 rounded-lg'>
                      <h2 className='text-center text-2xl font-semibold text-yellow-400'>
                          “Cultural Immersion Meets the FIFA World Cup”
                      </h2>
                      <p className='text-center text-lg text-gray-200 mt-2'>
                          A spotlight on how Turkish traditions enhance the FIFA experience for fans.
                      </p>
                      <p className='text-center font-bold text-2xl text-gray-200 mt-2'>
                          Deutsche Welle
                      </p>
                  </div>
                  <div className='p-5 bg-red-900 rounded-lg'>
                      <h2 className='text-center text-2xl font-semibold text-yellow-400'>
                          “Why Istanbul Deserves to Host FIFA 2026”
                      </h2>
                      <p className='text-center text-lg text-gray-200 mt-2'>
                          An editorial on Istanbul’s capabilities and appeal as a world-class host city.
                      </p>
                      <p className='text-center font-bold text-2xl text-gray-200 mt-2'>
                          BBC UK
                      </p>
                  </div>
                  <div className='p-5 bg-red-900 rounded-lg'>
                      <h2 className='text-center text-2xl font-semibold text-yellow-400'>
                          “A World Cup Like No Other”
                      </h2>
                      <p className='text-center text-lg text-gray-200 mt-2'>
                          Highlighting the unique blend of football, culture, and tourism in Turkiye.
                      </p>
                      <p className='text-center font-bold text-2xl text-gray-200 mt-2'>
                          NHK World
                      </p>
                  </div>
              </div>
          </div>
      </div>
    )
  }
  
