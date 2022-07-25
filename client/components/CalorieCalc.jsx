import React, { useState, useEffect, useContext } from 'react';
import Container from '@mui/material/Container';
import { AppContext } from '../context/AppContext.jsx';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const CalorieCalc = ({
  userSex,
  userAge,
  userHeight,
  userWeight,
  calorieCount,
  setCalorieCount,
}) => {
  const [calCnt, setCalCnt] = useState(0);

  const getCalCnt = () => {
    if (userSex === 'female') {
      const userCalCnt = Math.round(
        (65.51 + 4.35 * userWeight + 4.7 * userHeight - 4.7 * userAge) * 1.55
      );
      setCalCnt(userCalCnt);
    } else {
      const userCalCnt = Math.round(
        (66.47 + 6.24 * userWeight + 12.7 * userHeight - 6.75 * userAge) * 1.55
      );
      setCalCnt(userCalCnt);
    }
  };

  useEffect(() => {
    getCalCnt();
  });

  const handleResetClick = () => {
    setCalorieCount(0);
  };

  return (
    <Container sx={{
      textAlign: 'center',
      p: 2,
      width: 'auto'
    }}>
      <Box sx={{
        fontSize: 24
      }}>
        {calCnt} - {calorieCount} = {Math.round(calCnt - calorieCount)}
      </Box>
      <Box>
        <Button variant='outlined' onClick={handleResetClick} >Reset</Button>
      </Box>
    </Container>
  );
};

export default CalorieCalc;
