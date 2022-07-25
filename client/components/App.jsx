import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';

import CalorieCalc from './CalorieCalc.jsx';
import SavedRecipesList from './SavedRecipesList.jsx';
import Navbar from './Navbar.jsx';

import Search from './Search.jsx';

const App = () => {
  return (
    <div>
      <Typography variant='h3' color='primary'>
        EatSmart
      </Typography>

      <Navbar />

      <Search />
    </div>
  );
};

export default App;

// dow was here
