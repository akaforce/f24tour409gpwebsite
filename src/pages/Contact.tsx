import React from 'react';
import skyline from '../images/skyeline.jpg';

export default function Contact() {
  return (
    <div className='bg-black h-screen flex flex-col'>
        {/* Hero Section */}
        <div className='bg-red-700 relative'>
            <img 
                src={skyline} 
                alt='Contact Us Banner' 
                className='w-full h-[500px] object-cover brightness-75'
            />
            <h1 className="absolute top-[15%] left-[50%] transform -translate-x-1/2 text-center text-5xl md:text-6xl lg:text-7xl text-white font-bold">Contact Us</h1>
        <h2 className="absolute top-[40%] left-[50%] transform -translate-x-1/2 text-center text-2xl md:text-4xl lg:text-5xl text-yellow-400 font-bold">Get in touch with us for all FIFA World Cup 2026 inquiries and support!</h2>
        </div>

        {/* Contact Information Section */}
        <div className='m-5 p-10 bg-red-800'>
            <h1 className='text-center text-4xl font-bold text-white'>Contact Information</h1>
            <div className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='p-5'>
                    <h2 className='text-3xl font-semibold text-white'>Reach Us</h2>
                    <p className='text-2xl text-gray-200 mt-3'>Email: info@fifa2026turkiye.com</p>
                    <p className='text-2xl text-gray-200'>Phone: +90 555 123 2026</p>
                    <p className='text-2xl text-gray-200'>Address: 123 FIFA Way, Istanbul, Turkiye</p>
                </div>
                <div className='p-5'>
                    <h2 className='text-3xl font-semibold text-white'>Follow Us</h2>
                    <p className='text-2xl text-gray-200 mt-3'>Instagram: @fifa2026turkiye</p>
                    <p className='text-2xl text-gray-200'>Twitter: @fifa2026turkiye</p>
                    <p className='text-2xl text-gray-200'>Facebook: FIFA World Cup Turkiye 2026</p>
                </div>
            </div>
        </div>

        {/* Team Members Section */}
        <div className='m-5 p-10 bg-black'>
            <h1 className='text-center text-4xl font-bold text-red-500'>Meet the Team</h1>
            <div className='mt-5 grid grid-cols-1 md:grid-cols-3 gap-5'>
                <div className='p-5 bg-red-900 rounded-lg'>
                    <h2 className='text-center text-2xl font-semibold text-yellow-400'>Aaron Arauco Castillo</h2>
                    <p className='text-center text-2xl text-gray-200 mt-2'>Website Coordinator</p>
                </div>
                <div className='p-5 bg-red-900 rounded-lg'>
                    <h2 className='text-center text-2xl font-semibold text-yellow-400'>Ahad Bhaidani</h2>
                    <p className='text-center text-2xl text-gray-200 mt-2'>Marketing Specialist</p>
                </div>
                <div className='p-5 bg-red-900 rounded-lg'>
                    <h2 className='text-center text-2xl font-semibold text-yellow-400'>Daro Mrakpor</h2>
                    <p className='text-center text-2xl text-gray-200 mt-2'>Cultural Experience Designer</p>
                </div>
                <div className='p-5 bg-red-900 rounded-lg'>
                    <h2 className='text-center text-2xl font-semibold text-yellow-400'>Calleigh Ng</h2>
                    <p className='text-center text-2xl text-gray-200 mt-2'>Public Relations Expert</p>
                </div>
                <div className='p-5 bg-red-900 rounded-lg'>
                    <h2 className='text-center text-2xl font-semibold text-yellow-400'>Gabriel Rodriguez</h2>
                    <p className='text-center text-2xl text-gray-200 mt-2'>Website and Visuals Coordinator</p>
                </div>
                <div className='p-5 bg-red-900 rounded-lg'>
                    <h2 className='text-center text-2xl font-semibold text-yellow-400'>Lach Simo</h2>
                    <p className='text-center text-2xl text-gray-200 mt-2'>Cultural Experience Designer</p>
                </div>
            </div>
        </div>
    </div>
  )
}
