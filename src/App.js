import React from "react";
import "./App.css";
import Particles from "react-particles-js";
import styled from "styled-components";
import smart_street_lamp from "./img/smart_street_lamp.png"
import satellite_image from "./img/map.png"
import camping from "./img/camping.png"
function App() {
  const Overlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fc5185;
    overflow: hidden;
    width: 100%;
    height: 0;
    border-radius: 10px;
    transition: 0.5s ease;
  `;
  const OverlayText = styled.div`
    text-align:center;
    color: white;
    margin-top:35%;
  `;
  const Card = styled.div`
    display: inline-block;
    position: relative;
    width: 31%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 1%;
    height: 250px;
    border-radius: 10px;
    background-color: white;
    transition: all 0.5s ease-in-out;
    color: palevioletred;
    &:hover ${Overlay} {
      height: 100%;
    }
  `;

  return (
    <div>
      <div className="particle-js-container">
        <Particles
          width="100vw"
          height="140vh"
          style={{
            background: `#364f6b`
          }}
        />
      </div>
      <div className="random">Hi, I'm Joshua</div>
      <div className="container">
        <h1 id="heading">ACD</h1>

        <Card>
          <div className="card-image">
            <img src={smart_street_lamp} />
          </div>
          <div className="card-text">Smart Street Lamps</div>
          <Overlay><OverlayText>View More</OverlayText></Overlay>
        </Card>
        <Card>
          <div className="card-image">
            <img src={satellite_image} />
          </div>
          <div className="card-text">Semantic Segmentation of Satellite Tiles</div>
          <Overlay><OverlayText>View More</OverlayText></Overlay>
        </Card>
        <Card>
          <div className="card-image">
            <img src={camping} />
          </div>
          <div className="card-text">Smart Street Lamps</div>
          <Overlay><OverlayText>View More</OverlayText></Overlay>
        </Card>
      </div>
    </div>
  );
}

export default App;
