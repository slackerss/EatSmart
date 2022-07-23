import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

import LogoutMenuItem from "./Logout-menuItem.jsx";

function Navmenu() {
  // determines where to Anchor the element
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl)

  const handleMenuClick = (e) => {
    setAnchorEl(e.currentTarget);
  }

const handleMenuClose = () => {
  setAnchorEl(null);
}
 
const menuItemStyle = {
  textDecoration: "none",
  textDecorationColor: "black"
}

  return (
    <div>
    <IconButton
      id="menu-button"
      size="large"
      edge="start"
      color="inherit"
      aria-controls={open ? 'Eatsmart-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleMenuClick}
      sx={{ mr: 2 }}
    >
      <MenuIcon />
    </IconButton>
    <Menu 
    id="Eatsmart-menu"
    anchorEl={anchorEl}
    open={open}
    onClose={handleMenuClose}
    MenuListProps={{
      'aria-labelledby': 'menu-button'
    }}
    >
      <MenuItem onClick={handleMenuClose} >
        <NavLink to="/" style={menuItemStyle} end>Home</NavLink>
      </MenuItem>

      <MenuItem onClick={handleMenuClose} >
      <NavLink to="/profile" style={menuItemStyle} >Profile</NavLink>
      </MenuItem>

      <LogoutMenuItem />
    </Menu>
    </div>
  )
}






export default Navmenu;











