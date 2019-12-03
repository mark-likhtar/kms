import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const PrimaryButton = ({ text, width, onClick }) => (
  <div className="primaryButtonContainer" role="button" onClick={onClick}>
    <div className="primaryButton" style={{ width }}>
      {text}
    </div>
  </div>
);

PrimaryButton.propTypes = {
  text: PropTypes.string,
  width: PropTypes.string,
  onClick: PropTypes.func
};

PrimaryButton.defaultProps = {
  text: '',
  width: 'fit-content',
  onClick: () => {}
};

export default PrimaryButton;
