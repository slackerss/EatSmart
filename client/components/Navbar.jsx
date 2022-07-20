import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
      }}
    >
      <Link to='/'>Home </Link>
      <Link to='/profile'>Profile</Link>
    </nav>
  );
}

export default Navbar;
