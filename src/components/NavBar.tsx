import React, { useState } from 'react';
import fifaNavLogo from '../images/fifaturkeylogo_transdark.png';
import goTurkiyeLogo from '../images/turkiyelogo_transdark.png';

interface NavBarProps {
  setCurrentPage: (page: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-red-950 via-slate-950 to-red-950 flex flex-row items-center justify-between px-[3%] py-5">
      {/* Logos Section */}
      <div id="logos_aisle" className="flex flex-row items-center justify-center">
        <img
          src={fifaNavLogo}
          alt="fifa logo"
          className="h-14 w-auto cursor-pointer"
          onClick={() => setCurrentPage('Home')}
        />
        <img
          src={goTurkiyeLogo}
          alt="go turkiye logo"
          className="h-16 w-auto cursor-pointer"
          onClick={() => window.open('https://www.visitsturkiye.com/', '_blank')}
        />
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="flex md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Full Nav for Larger Screens */}
      <div
        id="pages_nav"
        className="hidden md:flex flex-row h-[30%] text-xl font-semibold gap-3"
      >
        <p
          className="cursor-pointer px-4 hover:text-red-300"
          onClick={() => setCurrentPage('Matches')}
        >
          Matches
        </p>
        <p
          className="cursor-pointer px-4 hover:text-red-300"
          onClick={() => setCurrentPage('Explore')}
        >
          Explore Türkiye
        </p>
        <p
          className="cursor-pointer px-4 hover:text-red-300"
          onClick={() => setCurrentPage('Packages')}
        >
          Packages
        </p>
        <p
          className="cursor-pointer px-4 hover:text-red-300"
          onClick={() => setCurrentPage('Media')}
        >
          Media Team
        </p>
        <p
          className="cursor-pointer px-4 hover:text-red-300"
          onClick={() => setCurrentPage('Sustainability')}
        >
          Sustainability
        </p>
        <p
          className="cursor-pointer px-4 hover:text-red-300"
          onClick={() => setCurrentPage('Contact')}
        >
          Contact
        </p>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isMenuOpen && (
        <div
          className="absolute top-20 left-0 w-full bg-gradient-to-r from-red-950 via-slate-950 to-red-950 flex flex-col items-center text-xl font-semibold text-white md:hidden z-50"
        >
          <p
            className="cursor-pointer px-4 py-2 hover:bg-red-300"
            onClick={() => {
              setCurrentPage('Matches');
              setIsMenuOpen(false);
            }}
          >
            Matches
          </p>
          <p
            className="cursor-pointer px-4 py-2 hover:bg-red-300"
            onClick={() => {
              setCurrentPage('Explore');
              setIsMenuOpen(false);
            }}
          >
            Explore Türkiye
          </p>
          <p
            className="cursor-pointer px-4 py-2 hover:bg-red-300"
            onClick={() => {
              setCurrentPage('Packages');
              setIsMenuOpen(false);
            }}
          >
            Packages
          </p>
          <p
            className="cursor-pointer px-4 py-2 hover:bg-red-300"
            onClick={() => {
              setCurrentPage('Media');
              setIsMenuOpen(false);
            }}
          >
            Media Team
          </p>
          <p
            className="cursor-pointer px-4 py-2 hover:bg-red-300"
            onClick={() => {
              setCurrentPage('Sustainability');
              setIsMenuOpen(false);
            }}
          >
            Sustainability
          </p>
          <p
            className="cursor-pointer px-4 py-2 hover:bg-red-300"
            onClick={() => {
              setCurrentPage('Contact');
              setIsMenuOpen(false);
            }}
          >
            Contact
          </p>
        </div>
      )}
    </div>
  );
};

export default NavBar;
