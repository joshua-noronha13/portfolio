import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Particles from "react-particles-js";
import styled from "styled-components";

function App() {
  const Card = styled.div`
    display: inline-block;
    width: 31%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 1%;
    height: 250px;
    border-radius: 10px;
    background-color: white;
    transition: all 0.5s ease-in-out;
    color: palevioletred;
  `;

  return (
    <div>
      <div className="particle-js-container">
        <Particles
          width="100vw"
          height="50vh"
          style={{
            background: `linear-gradient(to right, #000046, #1CB5E0)`
          }}
        />
      </div>
      <div className="container">
        <h1 id="heading">Joshua Noronha</h1>

        <Card>
          <div className="card-image">
            <img src="./img/smart_street_lamps.jpeg" />
          </div>
          <div className="card-text">Smart Street Lamps</div>
        </Card>
        <div className="card-hide">
          <i className="fas fa-play-circle"></i> Click here
        </div>
        <Card>
          <div className="card-image">
            <img src="./img/smart_street_lamps.jpeg" />
          </div>
          <div className="card-text">Smart Street Lamps</div>
        </Card>
        <Card className="card">
          <div className="card-image">
            <img src="./img/smart_street_lamps.jpeg" />
          </div>
          <div className="card-text">Smart Street Lamps</div>
        </Card>
      </div>
    </div>
  );
}

export default App;
