import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import CalorieCalc from './CalorieCalc.jsx';
import FoodLogList from './FoodLogList.jsx';

const App = () => {


  return (
    <div>
      <h1>EatSmart</h1>
      <nav style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem"
      }}
      >
        <Link to="/profile">Profile component</Link>
      </nav>
      <div>Search component</div>
      <CalorieCalc />
      <div>Log component</div>
      <FoodLogList />
    </div>
  )
}

export default App;
