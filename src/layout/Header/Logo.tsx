import React from 'react';
import { Link } from 'react-router-dom';
import tmLogo from './../../assets/tmLogo.jpg';

const Logo = () => {
  return (
    <>
      <Link to="/">
        <img style={{ width: 'auto', height: '70px' }} src={tmLogo} alt="TM Logo" />
      </Link>
    </>
  );
};

export default Logo;
