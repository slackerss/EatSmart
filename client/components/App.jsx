import React from 'react';
import axios from 'axios';

import CalorieCalc from './CalorieCalc.jsx';
import FoodLogList from './FoodLogList.jsx';

function App() {
  return (
    <div>
      <h1>EatSmart</h1>
      <div>Search component</div>
      <CalorieCalc />
      <div>Log component</div>
      <FoodLogList />
      <div>Profile component</div>
    </div>
  );
}

export default App;
