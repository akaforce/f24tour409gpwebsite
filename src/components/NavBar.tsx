import React from 'react';
import fifaNavLogo from '../images/fifaturkeylogo_transdark.png';
import goTurkiyeLogo from '../images/turkiyelogo_transdark.png';

interface NavBarProps {
  setCurrentPage: (page: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ setCurrentPage }) => {
  return (
    <div className='bg-gradient-to-r from-red-950 via-slate-950 to-red-950 flex flex-row  items-center justify-between px-[3%] py-9'>
      <div id='logos_aisle' className='flex flex-row w-[33%]'>
        <img src={fifaNavLogo} alt='fifa logo' className='h-20 w-auto'  onClick={() => setCurrentPage('Home')} />
        <img src={goTurkiyeLogo} alt='go turkiye logo' className='h-20 w-auto' onClick={() => window.open('https://www.visitsturkiye.com/', '_blank')}/>
      </div>

      <div id='pages_nav' className='flex flex-row  h-[30%] text-xl font-semibold gap-3'>
        <p className='cursor-pointer px-4 hover:text-red-300' onClick={() => setCurrentPage('Matches')}>Matches</p>
        <p className='cursor-pointer px-4 hover:text-red-300' onClick={() => setCurrentPage('Explore')}>Explore Türkiye</p>
        <p className='cursor-pointer px-4 hover:text-red-300' onClick={() => setCurrentPage('Packages')}>Packages</p>
        <p className='cursor-pointer px-4 hover:text-red-300' onClick={() => setCurrentPage('Media')}>Media Team</p>
        <p className='cursor-pointer px-4 hover:text-red-300' onClick={() => setCurrentPage('Sustainability')}>Sustainability</p>
        <p className='cursor-pointer px-4 hover:text-red-300' onClick={() => setCurrentPage('Contact')}>Contact</p>     
      </div>
    </div>
  );
}

export default NavBar;