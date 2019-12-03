import React from 'react';
//import PropTypes from 'prop-types';

import './styles.css';

const MainLayout = ({ children }) => {
  return <div className="root">{children}</div>;
};

MainLayout.propTypes = {};

export default MainLayout;
