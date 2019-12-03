import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const InfoBlock = ({ children, style }) => (
  <div className="infoBlockContainer" style={style}>
    {children}
  </div>
);

InfoBlock.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  style: PropTypes.any
};

InfoBlock.defaultProps = {
  children: null
};

export default InfoBlock;
