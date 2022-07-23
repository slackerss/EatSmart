import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';

import CalorieCalc from './CalorieCalc.jsx';
import SavedRecipesList from './SavedRecipesList.jsx';
import Navbar from './Navbar.jsx';
import LoginButton from './Login-button.jsx';
import SignupButton from './Signup-button.jsx';
import LogoutButton from './Logout-button.jsx';
import Search from './Search.jsx';

const App = () => {
  return (
    <div>
      <Typography variant="h3" color="primary" >EatSmart</Typography>
  
      <Navbar />
      <LogoutButton />
      <h3>New to Smart?</h3>
      <SignupButton />
      <Search />
    </div>
  );
};

export default App;
