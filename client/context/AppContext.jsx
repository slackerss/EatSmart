/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import axios from 'axios';
import React, { createContext, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [searchResults, setSearchResults] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const { isAuthenticated } = useAuth0();

  const searchRecipes = ({ query }) => {
    axios
      .get('/search', { params: { query } })
      .then((response) => {
        console.log(response.data.hits);
        setSearchResults(response.data.hits);
      })
      .catch((err) => console.error(err));
  };

  const saveRecipe = (recipe) => {
    if(!isAuthenticated){
      alert('you must sign in to save a recipe!')
    }
    axios
      .post('/search/save', recipe)
      .then((response) => {
        console.log(response, 'recipe saved');
        setSavedRecipes(response);
      })
      .catch((err) => console.error(err));
  };
  const appProps = {
    searchRecipes,
    searchResults,
    setSearchResults,
    savedRecipes,
    setSavedRecipes,
    saveRecipe,
  };
  return <AppContext.Provider value={appProps}>{children}</AppContext.Provider>;
}

export { AppContextProvider, AppContext };
