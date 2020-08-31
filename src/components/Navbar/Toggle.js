import React from 'react';
import { Form } from 'react-bootstrap';

export default function Toggle() {
  let dark = false;
  function toggleDarkMode() {
    dark = !dark;
    const root = document.querySelector(':root');
    if (dark) {
      root.style.setProperty('--background', 'black');
      root.style.setProperty('--fontColor', 'white');
    } else {
      root.style.setProperty('--background', 'white');
      root.style.setProperty('--fontColor', '#232323');
    }
  }
  return (
    <div style={{ display: 'inline-block' }}>
      <i className="fa fa-sun-o" style={{ display: 'inline-block' }} aria-hidden="true" />
      <Form.Check
        type="switch"
        id="custom-switch"
        label=""
        style={{ display: 'inline-block', margin: '0 0 0 7px' }}
        value={dark}
        onChange={toggleDarkMode}
      />
      <i className="fa fa-moon-o" aria-hidden="true" style={{ display: 'inline' }} />
    </div>
  );
}
