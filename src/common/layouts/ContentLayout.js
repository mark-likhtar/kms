import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
// import Footer from '../Footer';

const ContentLayout = ({ children, isHeader, isFooter }) => {
  return (
    <div className="main">
      {isHeader && <Header />}
      <content className="content">{children}</content>
      {/* {isFooter && <Footer />} */}
    </div>
  );
};

ContentLayout.propTypes = {
  isHeader: PropTypes.bool,
  isFooter: PropTypes.bool
};

ContentLayout.defaultProps = {
  isHeader: true,
  isFooter: true
};

export default ContentLayout;
