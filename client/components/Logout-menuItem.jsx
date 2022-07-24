import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import MenuItem from '@mui/material/MenuItem';

const LogoutMenuItem = () => {
  const { logout } = useAuth0();
  return (
    <MenuItem
      className='btn btn-danger btn-block'
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Logout
    </MenuItem>
  );
};

export default LogoutMenuItem;