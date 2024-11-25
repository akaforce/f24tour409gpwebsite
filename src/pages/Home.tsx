import React from 'react'
import stadium from '../images/ataturklanding.jpg'
import FTlogo from '../images/fifaturkeylogo_transdark.png'
import culture from '../images/cultrue.jpg';
import fans from '../images/footballfans.jpg';
import landscapes from '../images/cappadocia.jpg';

// export default function Home() {
//   return (
//     // <div className='bg-slate-400 h-screen flex flex-col'>
//     //     <div className='bg-slate-300'>
//     //         <img src={stadium} alt='ataturk stadium' className='w-full brightness-50'/>
//     //         <h1 className='absolute top-[300px] left-[35%] text-center text-9xl'>Welcome To</h1>
//     //         <img src={FTlogo} alt='logo' className='absolute top-[389px] left-[10%] h-auto w-[85%]'/>         
//     //     </div>
//     //     <div className='m-5 p-10 bg-slate-300'>
//     //         <h1 className='items-center text-center text-7xl'>Section 2</h1>
//     //     </div>
//     //     <div className='m-5 p-10 bg-slate-300'>
//     //         <h1 className='items-center text-center text-7xl'>Section 3</h1>
//     //     </div>
//     // </div>
//     <div className='bg-slate-400 h-screen flex flex-col'>
//         <div className='bg-slate-300 relative'>
//             <img src={stadium} alt='Ataturk Stadium' className='w-full brightness-50'/>
//             <h1 className='absolute top-[300px] left-[35%] text-center text-9xl text-white font-bold'>Welcome To</h1>
//             <img src={FTlogo} alt='FIFA Logo' className='absolute top-[389px] left-[10%] h-auto w-[85%]'/>
//         </div>
//         <div className='m-5 p-10 bg-slate-300'>
//             <h1 className='text-center text-7xl font-bold'>FIFA World Cup Turkey 2026</h1>
//             <p className='text-center text-xl mt-5'>
//                 Experience the world’s greatest football event in the heart of culture, heritage, and excitement. 
//                 Join us for a month-long adventure across Turkey’s iconic cities.
//             </p>
//         </div>
//         <div className='m-5 p-10 bg-slate-300'>
//             <h1 className='text-center text-5xl font-bold'>Discover More</h1>
//             <div className='flex justify-center mt-5 space-x-10'>
//                 <a href='/matches' className='text-xl underline text-blue-500'>Matches</a>
//                 <a href='/packages' className='text-xl underline text-blue-500'>Packages</a>
//                 <a href='/explore-turkiye' className='text-xl underline text-blue-500'>Explore Turkiye</a>
//             </div>
//         </div>
//     </div>
//   )
// }

export default function Home({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <div className='bg-slate-400 h-screen flex flex-col'>
        {/* Hero Section */}
        <div className='bg-slate-300 relative'>
            <img src={stadium} alt='Ataturk Stadium' className='w-full brightness-50'/>
            <h1 className='absolute top-[200px] left-[30%] text-center text-9xl text-white font-bold'>Welcome To</h1>
            <img src={FTlogo} alt='logo' className='absolute top-[300px] left-[10%] h-auto w-[85%]'/> 
            <p className='absolute top-[750px] px-[5%] text-center text-6xl text-white'>
                Discover the magic of football in Turkey – where East meets West, passion meets culture.
            </p>
        </div>
        
          {/* Why Turkiye Section */}
          <div className='m-5 p-10 bg-red-800'>
            <h1 className='text-center text-7xl font-bold text-white'>Why Turkiye?</h1>
            <div className='mt-5 grid grid-cols-1 md:grid-cols-3 gap-5'>
                <div className='p-5'>
                    <img 
                        src={culture} 
                        alt='Culture' 
                        className='w-full h-[300px] object-cover rounded-lg'
                    />
                    <h2 className='text-center text-2xl font-semibold mt-3 text-white'>Rich Cultural Heritage</h2>
                    <p className='text-center text-xl mt-2 text-gray-200'>
                        Explore Turkiye’s unique blend of history and modernity, from Hagia Sophia to vibrant bazaars.
                    </p>
                </div>
                <div className='p-5'>
                    <img 
                        src={fans} 
                        alt='Fans' 
                        className='w-full h-[300px] object-cover rounded-lg'
                    />
                    <h2 className='text-center text-2xl font-semibold mt-3 text-white'>Passionate Fans</h2>
                    <p className='text-center text-xl mt-2 text-gray-200'>
                        Join millions of football enthusiasts in Turkiye, where the game is a way of life.
                    </p>
                </div>
                <div className='p-5'>
                    <img 
                        src={landscapes} 
                        alt='Cappadocia' 
                        className='w-full h-[300px] object-cover rounded-lg'
                    />
                    <h2 className='text-center text-2xl font-semibold mt-3 text-white'>Diverse Landscapes</h2>
                    <p className='text-center text-xl mt-2 text-gray-200'>
                        From Istanbul’s skyline to Cappadocia’s hot air balloons, Turkiye offers unmatched beauty.
                    </p>
                </div>
            </div>
        </div>
        
        {/* Testimonials Section */}
        <div className='m-5 p-10 bg-black'>
            <h1 className='text-center text-7xl font-bold text-red-500'>What Fans Are Saying</h1>
            <div className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='p-5 bg-red-800 rounded-lg shadow-lg'>
                    <p className='text-4xl italic text-gray-200'>
                        "Watching a match in Turkiye is more than a game – it’s an unforgettable journey through culture and excitement!"
                    </p>
                    <h3 className='text-right text-xl font-semibold mt-3 text-white'>- Carlos M., Spain</h3>
                </div>
                <div className='p-5 bg-red-800 rounded-lg shadow-lg'>
                    <p className='text-4xl italic text-gray-200'>
                        "The passion of Turkish fans is incredible. Every moment feels like a celebration!"
                    </p>
                    <h3 className='text-right text-xl font-semibold mt-3 text-white'>- Lisa T., UK</h3>
                </div>
            </div>
        </div>
        
        {/* Explore and Learn More */}
        <div className='m-5 p-10 bg-red-900'>
            <h1 className='text-center text-7xl font-bold text-white'>Explore More</h1>
            <p className='text-center text-2xl mt-5 text-gray-300'>
                Dive into our curated packages, match schedules, and cultural experiences. Discover what makes Turkiye the perfect host for FIFA 2026!
            </p>
            <div className='flex justify-center mt-5 space-x-10'>
                <p className='text-xl underline text-yellow-400' onClick={() => setCurrentPage('Matches')}>Matches</p>
                <p className='text-xl underline text-yellow-400' onClick={() => setCurrentPage('Packages')}>Packages</p>
                <p className='text-xl underline text-yellow-400' onClick={() => setCurrentPage('Explore')}>Explore Turkiye</p>
            </div>
        </div>
    </div>
  )
}
