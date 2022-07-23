import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './Login-button.jsx';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


function Navbar () {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>EatSmart</Typography>
    <Link to='/'>Home </Link>
    <Link to='/profile'>Profile</Link>
    <LoginButton />
      </Toolbar>
      </AppBar>
    </Box>
  )
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
