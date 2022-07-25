import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

import Navbar from './Navbar.jsx';
import LoginButton from './Login-button.jsx';
import ProfileDetails from './Profile-details.jsx';
import SavedRecipesList from './SavedRecipesList.jsx';
import CalorieCalc from './CalorieCalc.jsx';
import Typography from '@mui/material/Typography';

function Profile() {
  //Auth0
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [savedRecipes, setSavedRecipes] = useState([]);
  const [calorieCount, setCalorieCount] = useState(0);

  const getSavedRecipes = (user) => {
    axios
      .get('/myrecipes')
      .then(({ data }) => {
        console.log(data);
        const userRecipes = data.filter((recipe) => {
          return recipe.User_email === user.email;
        });
        setSavedRecipes(userRecipes);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSavedRecipes(user);
  }, [isAuthenticated]);

  //render while page is loading
  if (isLoading) {
    return (
      <Typography variant='h2' color='primary'>
        One second...
      </Typography>
    );
  }

  //render when not logged in
  if (!isAuthenticated) {
    return (
      <div>
        <Typography variant='h3' color='primary'>
          EatSmart
        </Typography>

        <Navbar />
        <br></br>
        <Typography variant='h6' color='darkgrey'>
          You must sign in to view your profile
        </Typography>
      </div>
    );
  }

  return (
    isAuthenticated && (
      <div>
        <Typography variant='h3' color='primary'>
          EatSmart
        </Typography>

        <Navbar />

        <img src={user.picture} />
        <Typography variant='h5' color='primary'>
          Welcome Back {user.name}
        </Typography>
        <br></br>
        <ProfileDetails
          user={user}
          calorieCount={calorieCount}
          setCalorieCount={setCalorieCount}
        />
        <br></br>
        <SavedRecipesList
          savedRecipes={savedRecipes}
          getSavedRecipes={getSavedRecipes}
          calorieCount={calorieCount}
          setCalorieCount={setCalorieCount}
        />
      </div>
    )
  );
}

export default Profile;
