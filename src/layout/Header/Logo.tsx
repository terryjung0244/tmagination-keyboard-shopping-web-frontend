import React from 'react';
import { Link } from 'react-router-dom';
import tmLogo from './../../assets/tmLogo.jpg';

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img
          style={{ borderRadius: '40px', width: '100px', marginRight: '50px' }}
          src={tmLogo}
          alt="TM Logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
