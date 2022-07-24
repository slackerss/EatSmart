import React, { useState, useEffect, useContext } from 'react';
import Container from '@mui/material/Container';
import { AppContext } from '../context/AppContext.jsx';
import Button from '@mui/material/Button';

const CalorieCalc = ({ userSex, userAge, userHeight, userWeight, calorieCount, setCalorieCount }) => {
  const [calCnt, setCalCnt] = useState(0);
  const [calLeft, setCalLeft] = useState(0);
  const [calLogged, setCalLogged] = useState(0);
  const { getLoggedRecipe } = useContext(AppContext);

  const getCalCnt = () => {
    if (userSex === 'female') {
      const userCalCnt = Math.round((65.51 + (4.35 * userWeight) + (4.7 * userHeight) - (4.7 * userAge)) * 1.55)
      setCalCnt(userCalCnt);
    } else {
      const userCalCnt = Math.round((66.47 + (6.24 * userWeight) + (12.7 * userHeight) - (6.75 * userAge)) * 1.55)
      setCalCnt(userCalCnt);
    }
  };

  const getCalLeft = () => {
    setCalLeft;
  };

  useEffect(() => {
    getCalCnt();
  });

  const handleResetClick = () => {
    setCalorieCount(0);
  }

  return (
    <Container>
      {calCnt} - {calorieCount} = {Math.round(calCnt - calorieCount)}
      <Button onClick={handleResetClick} >Reset</Button>
    </Container>
  );
};

export default CalorieCalc;
