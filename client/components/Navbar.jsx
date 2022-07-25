import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './Login-button.jsx';
import NavMenu from './NavMenu.jsx';
import SignupButton from './Signup-button.jsx';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <NavMenu />
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            EatSmart
          </Typography>
          <LoginButton />
          <SignupButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// function Navbar() {
//   return (
//     <nav
//       style={{
//         borderBottom: 'solid 1px',
//         paddingBottom: '1rem',
//       }}
//     >
//       <Link to='/'>Home </Link>
//       <Link to='/profile'>Profile</Link>
//     </nav>
//   );
// }

export default Navbar;
