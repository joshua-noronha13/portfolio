import React from 'react';
import './footer.css';
import Icon from '../BasicComponents/Icon';

export default function About() {
  return (
    <div style={{ textAlign: 'center', marginTop: '5em' }}>
      <div style={{ color: 'var(--secondary)' }}>
        Made with
        &nbsp;
        <span className="material-icons" style={{ fontSize: '0.9rem' }}>favorite</span>
        &nbsp;
        by Joshua Noronha
      </div>
      <div className="iconbar">
        <Icon
          url="https://www.linkedin.com/in/joshua-noronha/"
          iconType="fa-linkedin"
        />
        <Icon
          url="mailto:noronhajoshua@gmail.com"
          iconType="fa-envelope-o"
        />
        <Icon
          url="https://github.com/joshuanoronha/"
          iconType="fa-github"
        />
        <Icon
          url="https://trialbycode.com"
          iconType="fa-rss"
        />
      </div>
    </div>
  );
}
