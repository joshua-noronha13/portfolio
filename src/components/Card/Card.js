import React from "react";
import styled from "styled-components";
// import { Overlay, OverlayText } from "./Overlay"
import { motion } from "framer-motion"
import { Col } from 'react-bootstrap';

const CardStyle = styled.div`
    /* position: relative; */
    
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: 250px;
    max-width: 100%;
    border-radius: 10px;
    margin-top: 30px;
    /* transition: all 0.5s ease-in-out;
    color: palevioletred;
    &:hover $c{Overlay} {
      height: 100%;
    } */
  `;

export function Card(props) {
  return (
    <Col sm="12" md="6" lg="4" style={{ display: 'inline-block' }}>
      <motion.span variants={props.childVariants}>
        <CardStyle>
          <span>
            <div>
              <span class="material-icons" style={{ fontSize: "3rem", paddingTop: "10px", color: props.project.color }}>
                {props.project.image}
              </span>
            </div>
            <span style={{ color: "black", marginLeft: "10px" }}>{props.project.name}</span>
            <div style={{ fontSize: "0.9rem", margin: "10px", color: "var(--secondary)" }}>{props.project.description}</div>
            <div style={{margin: "10px", fontSize: "0.95rem", color: "var(--subsecondary)"}}>
              {props.project.tags ? props.project.tags.map(tag => {
              return <span>{tag} </span>
            }) : <span></span>}
            </div>
          </span>
          {/* <Overlay><OverlayText>View More</OverlayText></Overlay> */}
        </CardStyle>
      </motion.span>
    </Col>
  )
}



