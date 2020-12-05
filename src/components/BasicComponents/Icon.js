import React from 'react';
import PropTypes from 'prop-types';

export default function Icon(props) {
  const { iconType } = props;
  const { url } = props;
  return (
    <span>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <i className={`fa ${iconType}`} aria-hidden="true" style={{ padding: '10px', color: 'var(--fontColor)' }} />
      </a>
    </span>
  );
}

Icon.propTypes = {
  iconType: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
