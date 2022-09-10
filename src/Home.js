import './Home.css';
import React from 'react';
import Hero from './components/Hero'

function Home() {
  return (
    <React.StrictMode>
    <div className="Home">
      <Hero />
      <div className="content">
        
      </div>
      <div className='footer'>

      </div>     
    </div>
    </React.StrictMode>
  );
}

export default Home;
