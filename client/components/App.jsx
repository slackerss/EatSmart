import React from 'react';
import axios from 'axios';

import CalorieCalc from './CalorieCalc.jsx';
import FoodLogList from './FoodLogList.jsx';
import Navbar from './Navbar.jsx';
import Search from './Search.jsx';

const App = () => {
  return (
    <div>
      <h1>EatSmart</h1>
      <Navbar />
      <Search />
      <CalorieCalc />
      <div>Log component</div>
      <FoodLogList />
    </div>
  );
};

export default App;
