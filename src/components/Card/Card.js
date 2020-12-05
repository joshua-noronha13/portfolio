import React from 'react';
import styled from 'styled-components';
// import { Overlay, OverlayText } from "./Overlay"
import { motion } from 'framer-motion';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CardStyle = styled.div`
    height: 100%;
    padding-bottom: 13%;
    max-width: 100%;
    border-radius: 5px;
    margin-top: 30px;
    border: 2px solid var(--border);
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
  const { projectLink, codeLink } = project;
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
            <span style={{ color: 'var(--fontColor)', marginLeft: '10px' }}>{project.name}</span>
            <div style={{ fontSize: '0.9rem', margin: '10px', color: 'var(--secondary)' }}>{project.description}</div>
            <div style={{ margin: '10px 10px 0 10px', fontSize: '0.95rem', color: 'var(--subsecondary)' }}>
              {
                tags ? tags.map((tag) => <span key={tag}>{`${tag}\t`}</span>) : <span />
              }
            </div>
            <div style={{ margin: '0 10px 10px 10px', float: 'right' }}>
              {projectLink ? (
                <a href={projectLink} target="_blank" rel="noopener noreferrer">
                  <span className="material-icons" style={{ fontSize: '1.8rem', color: 'var(--subsecondary)' }}>
                    play_arrow
                  </span>
                </a>
              ) : <span />}
              {codeLink
                ? (
                  <a href={codeLink} target="_blank" rel="noopener noreferrer">
                    <span className="material-icons" style={{ fontSize: '1.8rem', color: 'var(--subsecondary)' }}>
                      source
                    </span>
                  </a>
                )
                : <span />}
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
    projectLink: PropTypes.string,
    codeLink: PropTypes.string,
  }).isRequired,
};
