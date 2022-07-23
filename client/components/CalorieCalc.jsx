import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';

const CalorieCalc = ({ userSex, userAge, userHeight, userWeight }) => {
  const [calCnt, setCalCnt] = useState(0);
  const [calLeft, setCalLeft] = useState(0);
  const [calLogged, setCalLogged] = useState(0);

  const getCalCnt = () => {
    if (userSex === 'female') {
      const userCalCnt = (65.51 + (4.35 * userWeight) + (4.7 * userHeight) - (4.7 * userAge));
      setCalCnt(userCalCnt);
    } else {
      const userCalCnt = (66.47 + (6.24 * userWeight) + (12.7 * userHeight) - (6.75 * userAge));
      setCalCnt(userCalCnt);
    }
  }

  const getCalLeft = () => {
    setCalLeft
  }

  useEffect(() => {
    getCalCnt();
  })
 
  return <Container>{calCnt} - 0 = {calCnt}</Container>;
};

export default CalorieCalc;
