import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  return (
    <div>
      <div className="error-message">
        Please view this site on a desktop for the best experience.
      </div>
      <div className="app">
        <Navbar />
        <Main />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
