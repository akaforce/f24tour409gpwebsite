import React, { useState } from 'react'
import stadium from '../images/ataturklanding.jpg'
import FTlogo from '../images/fifaturkeylogo_transdark.png'

export default function Home() {
  return (
    <div className='bg-slate-400 h-screen flex flex-col'>
        <div className='bg-slate-300'>
            <img src={stadium} alt='ataturk stadium' className='w-full brightness-50'/>
            <h1 className='absolute top-[300px] left-[35%] text-center text-9xl'>Welcome To</h1>
            <img src={FTlogo} alt='logo' className='absolute top-[389px] left-[10%] h-auto w-[85%]'/>         
        </div>
        <div className='m-5 p-10 bg-slate-300'>
            <h1 className='items-center text-center text-7xl'>Section 2</h1>
        </div>
        <div className='m-5 p-10 bg-slate-300'>
            <h1 className='items-center text-center text-7xl'>Section 3</h1>
        </div>
    </div>
  )
}
