import React from 'react';

import './styles.css';

const SecondaryButton = ({ text, width }) => (
  <button className="secondaryButton" style={{ width }}>
    {text}
  </button>
);

export default SecondaryButton;
