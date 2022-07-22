import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

import Navbar from './Navbar.jsx';
import LoginButton from './Login-button.jsx';
import SavedRecipesList from './SavedRecipesList.jsx';


function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

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

  if (isLoading) {
    return <h1>Hol up...</h1>
  }

  if (!isAuthenticated) {
    return (
      <div>
        <h1>Who are you</h1>

        <Navbar />
        <LoginButton />
      </div>
    )
  }

  return (
    isAuthenticated && (
      <>
      <div>
        <h1>EatSmart</h1>

        <Navbar />

        <img src={user.picture} />
        <h2>Welcome Back {user.name || 'User'}</h2>

        <div>Profile View</div>
      </div>
        {/* <SavedRecipesList savedRecipes={savedRecipes} getSavedRecipes={ getSavedRecipes }/> */}
      </>
    )
  )
}

export default Profile;
