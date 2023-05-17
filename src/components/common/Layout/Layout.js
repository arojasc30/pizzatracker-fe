import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';

const layoutStyles = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '16px',
};

const Layout = ({ children }) => {
  return (
    <div style={layoutStyles}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
