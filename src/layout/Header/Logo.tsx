import React from 'react';
import { Link } from 'react-router-dom';
import tmLogo from './../../assets/tmLogo.jpg';

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img style={{ width: '80px' }} src={tmLogo} alt="TM Logo" />
      </Link>
    </div>
  );
};

export default Logo;
