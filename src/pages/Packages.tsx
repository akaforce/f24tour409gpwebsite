import React from 'react';
import playplay from '../images/playplay.png';
import Breakfast from '../images/DALL-E_image_breakfast.webp';
import Tourstad from '../images/toutourtu.webp';
import IstanbulPubCrawlParty from '../images/Istanbul_pub_crawl.jpg';
import IstanbulNight from  '../images/istanbulnight.webp';
import VIPSeating from '../images/VIP_Seating.webp';
import rooftop_hotel from '../images/rooftop_hotel.jpeg';
import grand_bazaar from '../images/grand_bazaar.webp';
import Hagisphie from '../images/hagisophia.jpg';
import packages_background from '../images/packages_background.webp';

export default function Packages() {
  return (
    <div className='bg-black h-fit flex flex-col'>
      {/* Hero Section */}
      <div className='relative'>
        <img
          src={packages_background}
          alt='Packages Background'
          className='w-full h-[700px] object-cover brightness-50'
        />
        <h1 className='absolute top-[185px] left-[20%] text-center text-7xl text-white font-bold'>Our FIFA Experiences™ Package</h1>
        <p className='absolute top-[250px] left-[1%] px-[10%] text-4xl text-center text-yellow-400 p-2'>
          The FIFA games span a month, and this itinerary showcases a sample weekend for tourists. 
          Tourists stay at Wyndham Istanbul Old City Hotel or Artisan Istanbul MGallery, with games at Beşiktaş Stadium. 
          This is a sample itinerary for the Istanbul wekeend, and for each city weekend package, there is a different itinerary.
        </p>
      </div>
          {/* Day 1 Section */}
          <div className='mx-5 mt-10 mb-5 p-5 bg-red-800'>
        <h1 className='text-center text-7xl text-yellow-400 font-bold'>Day 1: Friday - Immersive Football Kickoff</h1>

        {/* Morning */}
        <h2 className='text-left text-5xl text-white font-bold mt-10'>Morning</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
          <div className='p-5 bg-black rounded-lg'>
            <ul className='text-4xl text-gray-200 list-disc pl-5'>
              <li><b>Meet the Stars:</b> Exclusive meet-and-greet session with FIFA players and coaches at Beşiktaş Vodafone Park.</li>
              <li><b>Stadium Tour:</b> Behind-the-scenes access to locker rooms, training areas, and media spaces.</li>
            </ul>
          </div>
          <div className='bg-gray-700 w-full h-[300px] object-cover rounded-lg flex items-center justify-center'>
          <img
            src={Tourstad}
            alt='turkye'
            className='w-full h-[300px] object-cover rounded-lg'
            />
          </div>
        </div>

        {/* Afternoon */}
        <h2 className='text-left text-5xl text-white font-bold mt-10'>Afternoon</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
          <div className='bg-gray-700 w-full h-[300px] object-cover rounded-lg flex items-center justify-center'>
          <img
            src={Breakfast}
            alt='turkye'
            className='w-full h-[300px] object-cover rounded-lg'
            />
          </div>
          <div className='p-5 bg-black rounded-lg'>
            <ul className='text-4xl text-gray-200 list-disc pl-5'>
              <li><b>Cultural Lunch:</b> Turkish cuisine in stadium-adjacent restaurants featuring local specialties.</li>
              <li><b>Relaxation:</b> Free time to explore nearby attractions like Dolmabahçe Palace or Taksim Square.</li>
            </ul>
          </div>
        </div>

        {/* Evening */}
        <h2 className='text-left text-5xl text-white font-bold mt-10'>Evening</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
          <div className='p-5 bg-black rounded-lg'>
            <ul className='text-4xl text-gray-200 list-disc pl-5'>
              <li><b>Pub Crawl Adventure:</b> Guided visits to Istanbul’s top bars, including Rock’n Rolla and Joker No. 19.</li>
              <li><b>Vibrant Nightlife:</b> Celebrate the FIFA vibe with live music, drinks, and social interactions.</li>
            </ul>
          </div>
          <div className='bg-gray-700 w-full h-[300px] object-cover rounded-lg flex items-center justify-center'>
          <img
            src={IstanbulPubCrawlParty}
            alt='turkye'
            className='w-full h-[300px] object-cover rounded-lg'
            />
          </div>
        </div>
      </div>

      {/* Day 2 Section */}
      <div className='mx-5 mt-10 mb-5 p-5 bg-black'>
        <h1 className='text-center text-7xl text-yellow-400 font-bold'>Day 2: Saturday - The Big Game Experience</h1>

        {/* Morning */}
        <h2 className='text-left text-5xl text-white font-bold mt-10'>Morning (Pre-Game Festival)</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
          <div className='p-5 bg-red-800 rounded-lg'>
            <ul className='text-4xl text-gray-200 list-disc pl-5'>
              <li><b>Live Entertainment:</b> Face-painting stations, and VR match simulations.</li>
              <li><b>Meet Legends:</b> Meet retired FIFA legends and buy exclusive merchandise.</li>
              <li><b>Mini Tournament:</b> Visitors play football with other fans or local players.</li>
            </ul>
          </div>
          <div className='bg-gray-700 w-full h-[300px] object-cover rounded-lg flex items-center justify-center'>
          <img
            src={playplay}
            alt='turkye'
            className='w-full h-[300px] object-cover rounded-lg'
            />
          </div>
        </div>

        {/* Afternoon */}
        <h2 className='text-left text-5xl text-white font-bold mt-10'>Afternoon</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
          <div className='bg-gray-700 w-full h-[300px] object-cover rounded-lg flex items-center justify-center'>
          <img
            src={VIPSeating}
            alt='turkye'
            className='w-full h-[300px] object-cover rounded-lg'
            />
          </div>
          <div className='p-5 bg-red-800 rounded-lg'>
            <ul className='text-4xl text-gray-200 list-disc pl-5'>
              <li><b>The Main Event:</b> Attend FIFA matches with VIP seating.</li>
              <li><b>Experience:</b> Private cubicles, snacks, and cocktails with unmatched views of the game.</li>
            </ul>
          </div>
        </div>

        {/* Evening */}
        <h2 className='text-left text-5xl text-white font-bold mt-10'>Evening</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
          <div className='p-5 bg-red-800 rounded-lg'>
            <ul className='text-4xl text-gray-200 list-disc pl-5'>
              <li><b>Rooftop Celebration:</b> Hosted at Wyndham Istanbul Old City Hotel with live DJ performances and themed cocktails.</li>
              <li><b>Relaxation:</b> Unwind or socialize under the Istanbul skyline.</li>
            </ul>
          </div>
          <div className='bg-gray-700 w-full h-[300px] object-cover rounded-lg flex items-center justify-center'>
          <img
            src={rooftop_hotel}
            alt='turkye'
            className='w-full h-[300px] object-cover rounded-lg'
            />
          </div>
        </div>
      </div>

      {/* Day 3 Section */}
      <div className='mx-5 mt-10 mb-5 p-5 bg-red-800'>
        <h1 className='text-center text-7xl text-yellow-400 font-bold'>Day 3: Sunday - Explore Istanbul</h1>

        {/* Morning */}
        <h2 className='text-left text-5xl text-white font-bold mt-10'>Morning (Cultural Immersion)</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
          <div className='p-5 bg-black rounded-lg'>
            <ul className='text-4xl text-gray-200 list-disc pl-5'>
              <li><b>Private Tour:</b> Tour the Grand Bazaar, the world’s oldest shopping mall.</li>
              <li><b>Breakfast:</b> Authentic breakfast with locals at nearby cafes.</li>
              <li><b>Relaxation Option:</b> Opt for a guided Bosphorus cruise.</li>
            </ul>
          </div>
          <div className='bg-gray-700 w-full h-[300px] object-cover rounded-lg flex items-center justify-center'>
          <img
            src={grand_bazaar}
            alt='turkye'
            className='w-full h-[300px] object-cover rounded-lg'
            />
          </div>
        </div>

        {/* Afternoon */}
        <h2 className='text-left text-5xl text-white font-bold mt-10'>Afternoon (Landmark Exploration)</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
          <div className='bg-gray-700 w-full h-[300px] object-cover rounded-lg flex items-center justify-center'>
          <img
            src={Hagisphie}
            alt='turkye'
            className='w-full h-[300px] object-cover rounded-lg'
            />
          </div>
          <div className='p-5 bg-black rounded-lg'>
            <ul className='text-4xl text-gray-200 list-disc pl-5'>
              <li><b>Landmarks:</b> Hagia Sophia Grand Mosque, Topkapi Palace, and the Blue Mosque.</li>
              <li><b>Guided Tours:</b> Gain insights into Istanbul’s rich history.</li>
              <li><b>Lunch:</b> Savor street food favorites like Simit, Baklava, and Balık ekmek.</li>
            </ul>
          </div>
        </div>

        {/* Evening */}
        <h2 className='text-left text-5xl text-white font-bold mt-10'>Evening (Street Market Adventures)</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
          <div className='p-5 bg-black rounded-lg'>
            <ul className='text-4xl text-gray-200 list-disc pl-5'>
              <li><b>Explore:</b> Vibrant markets featuring local crafts and delicacies.</li>
              <li><b>Nightlife:</b> Capture the essence of Istanbul’s nightlife in open-air bazaars.</li>
            </ul>
          </div>
          <div className='bg-gray-700 w-full h-[300px] object-cover rounded-lg flex items-center justify-center'>
          <img
            src={IstanbulNight}
            alt='turkye'
            className='w-full h-[300px] object-cover rounded-lg'
            />
          </div>
        </div>
      </div>
    </div>
  );
}