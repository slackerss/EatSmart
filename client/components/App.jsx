import React from 'react';
import axios from 'axios';

import CalorieCalc from './CalorieCalc.jsx';
import FoodLogList from './FoodLogList.jsx';
import Navbar from './Navbar.jsx';
import LoginButton from './Login-button.jsx';
import SignupButton from './Signup-button.jsx';
import LogoutButton from './Logout-button.jsx';

const App = () => {


  return (
    <div>
      <h1>EatSmart</h1>
      <Navbar />
      <LoginButton />
      <LogoutButton />
      <h3>New to Smart?</h3>
      <SignupButton />
      <div>Search component</div>
      <CalorieCalc />
      <div>Log component</div>
      <FoodLogList />
    </div>
  )
}

export default App;
