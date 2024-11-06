import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Home from './pages/Home';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     {/* <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p> */}
    //     <p>
    //       TOUR 409 Turkey Website
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       React Documentation
    //     </a>
    //   </header

    // main code
    <div>
      <div id='navHolder'>
        <NavBar></NavBar>
      </div>
      <div id='pagePlaceholder'>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
