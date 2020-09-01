import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function PrimaryButton(props) {
  const { text } = props;
  return (
    <Button variant="outline-primary" style={{ marginTop: '1em' }}>
      {text}
    </Button>
  );
}

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
};
