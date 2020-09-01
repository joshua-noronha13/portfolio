import React from 'react';
import styled from 'styled-components';
// import { Overlay, OverlayText } from "./Overlay"
import { motion } from 'framer-motion';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

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

export default function Card(props) {
  const childVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  const { project } = props;
  const { tags } = project;
  return (
    <Col sm="12" md="6" lg="4" style={{ display: 'inline-block' }}>
      <motion.span variants={childVariants}>
        <CardStyle>
          <span>
            <div>
              <span className="material-icons" style={{ fontSize: '3rem', paddingTop: '10px', color: project.color }}>
                {project.image}
              </span>
            </div>
            <span style={{ color: 'black', marginLeft: '10px' }}>{project.name}</span>
            <div style={{ fontSize: '0.9rem', margin: '10px', color: 'var(--secondary)' }}>{project.description}</div>
            <div style={{ margin: '10px', fontSize: '0.95rem', color: 'var(--subsecondary)' }}>
              {
                tags ? tags.map((tag) => <span key={tag}>{`${tag}\t`}</span>) : <span />
              }
            </div>
          </span>
        </CardStyle>
      </motion.span>
    </Col>
  );
}

Card.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};
