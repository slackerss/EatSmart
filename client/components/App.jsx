import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CalorieCalc from './CalorieCalc.jsx';
import SavedRecipesList from './SavedRecipesList.jsx';
import Navbar from './Navbar.jsx';
import Search from './Search.jsx';

const App = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  const getSavedRecipes = () => {
    axios
      .get('/myrecipes')
      .then(({ data }) => {
        setSavedRecipes(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSavedRecipes();
  }, []);

  return (
    <div>
      <h1>EatSmart</h1>
      <Navbar />
      <Search />
      <CalorieCalc />
      <div>Log component</div>
      <SavedRecipesList savedRecipes={savedRecipes} />
    </div>
  );
};

export default App;
