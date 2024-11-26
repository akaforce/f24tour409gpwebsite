import React from 'react'
import sustainability_istanbul from '../images/sustainability_istanbul.png'

export default function Sustainability() {
    return (
        <div className='bg-red-700 h-full flex flex-col'>
            {/* Influencers Section */}
            <div className='bg-red-700 relative'>
                <img
                    src={sustainability_istanbul}
                    alt='Contact Us Banner'
                    className='w-full h-[500px] object-cover brightness-75'
                />
                <h1 className='absolute top-[155px] text-center text-9xl text-white font-bold'>Sustainability</h1>
                <p className='absolute top-[280px] left-[5%] text-center text-5xl text-yellow-400'>
                    Why is sustainability important to us? Why is travelling sustainably important?
                </p>
            </div>


            <div className='m-5 p-16 bg-black'>
                <h1 className='text-center text-7xl font-bold text-red-500'>Our Commitment to Sustainable Tourism
                </h1>
                <div className='mt-5 grid grid-cols-1 md:grid-cols-4 gap-5'>
                    <div className='p-5 bg-red-900 rounded-lg'>
                        <h2 className='text-center text-5xl font-semibold text-yellow-400'>Eco-Friendly Practices</h2>
                        <p className='text-center text-2xl text-gray-200 mt-2'>
                            Green-certified hotels and venues.
                        </p>
                        <p className='text-center text-2xl text-gray-200 mt-2'>
                            Waste management initiatives at stadiums and events.
                        </p>
                    </div>
                    <div className='p-5 bg-red-900 rounded-lg'>
                        <h2 className='text-center text-4xl font-semibold text-yellow-400'>Transportation</h2>
                        <p className='text-center text-2xl text-gray-200 mt-2'>
                            Encouraging public transport and shared rides to reduce carbon footprint.
                        </p>
                    </div>
                    <div className='p-5 bg-red-900 rounded-lg'>
                        <h2 className='text-center text-4xl font-semibold text-yellow-400'>Local Empowerment</h2>
                        <p className='text-center text-2xl text-gray-200 mt-2'>
                            Collaborating with local businesses to boost the economy.
                        </p>
                        <p className='text-center text-2xl text-gray-200 mt-2'>
                            Promoting traditional crafts and regional cuisines to preserve cultural heritage.
                        </p>
                    </div>
                    <div className='p-5 bg-red-900 rounded-lg'>
                        <h2 className='text-center text-5xl font-semibold text-yellow-400'>Carbon Offset Programs</h2>
                        <p className='text-center text-2xl text-gray-200 mt-2'>
                            Partnering with organizations to offset emissions from travel and events.

                        </p>
                    </div>
                </div>
            </div>
            <div className='p-10 bg-black object-bottom'>
                <h1 className='items-center text-center text-7xl inset-x-0 bottom-0'>&#9851;</h1>
            </div>

        </div>
    )
}
