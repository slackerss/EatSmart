import React from 'react';
import axios from 'axios';

import CalorieCalc from './CalorieCalc.jsx';
import FoodLogList from './FoodLogList.jsx';
import Navbar from './Navbar.jsx';

const App = () => {
  return (
    <div>
      <h1>EatSmart</h1>
      <Navbar />
      <div>Search component</div>
      <CalorieCalc />
      <div>Log component</div>
      <FoodLogList />
    </div>
  );
};

export default App;
