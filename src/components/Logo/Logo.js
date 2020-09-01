import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { shuffle } from 'lodash';
import './logo.css';

const spring = {
  type: 'spring',
  damping: 20,
  stiffness: 300,
};

export default function Logo() {
  const initialColors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF'];
  const [colors, setColors] = useState(initialColors);

  useEffect(() => {
    setTimeout(() => setColors(shuffle(colors)), 2000);
  }, [colors]);

  return (
    <motion.ul id="logo" drag>
      {colors.map((background) => (
        <motion.li
          id="logo-item"
          key={background}
          layoutTransition={spring}
          style={{ background }}
        />
      ))}
    </motion.ul>
  );
}
