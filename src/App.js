import React from 'react';
import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';

function App() {
  return (
    <div>
      <div className="particle-js-container">
        <Particles
          style={{
            display: 'flex',
            width: '100%',
            height: '20%',
            background: `linear-gradient(to right, #000046, #1CB5E0)`
          }} />
      </div>
      <div className="container">
        <h1 id="heading">Joshua Noronha</h1>

        <div className="card">
          <div className="card-image"><img src="./img/smart_street_lamps.jpeg" /></div>
          <div className="card-text">Smart Street Lamps</div>
        </div>
        <div className="card-hide">
          <i className="fas fa-play-circle"></i> Click here
        </div>
        <div className="card">
          <div className="card-image"><img src="./img/smart_street_lamps.jpeg" /></div>
          <div className="card-text">Smart Street Lamps</div>
        </div>
        <div className="card">
          <div className="card-image"><img src="./img/smart_street_lamps.jpeg" /></div>
          <div className="card-text">Smart Street Lamps</div>
        </div>
      </div>
    </div>
  );
}

export default App;
