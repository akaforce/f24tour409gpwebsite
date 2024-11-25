import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Home from './pages/Home';
import Matches from './pages/Matches';
import Explore from './pages/Explore';
import Sustainability from './pages/Sustainability';
import Contact from './pages/Contact';
import Media from './pages/Media';
import Packages from './pages/Packages';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'Matches':
        return <Matches />;
      case 'Explore':
        return <Explore />;
      case 'Packages':
        return <Packages />;
      case 'Media':
        return <Media />
      case 'Sustainability':
        return <Sustainability />
      case 'Contact':
        return <Contact />
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className='text-white font-josefin'>
      <div id='navHolder'>
        <NavBar setCurrentPage={setCurrentPage}/>
      </div>
      <div id='pagePlaceholder'>
        {renderPage()}
      </div>
    </div>
  );

}

export default App;
