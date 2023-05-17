import React from 'react';
import { Link } from 'react-router-dom';

const headerStyles = {
  backgroundColor: '#f8f8f8',
  padding: '16px',
};

const linkStyles = {
  marginRight: '8px',
};

const Header = () => {
  return (
    <div style={headerStyles}>
      <div style={{ fontSize: '24px', margin: '0' }}>Pizza Dashboard</div>
      <nav>
        <Link to="/pizzas" style={linkStyles}>
          Pizzas
        </Link>
        <Link to="/people" style={linkStyles}>
          People
        </Link>
      </nav>
    </div>
  );
};

export default Header;
