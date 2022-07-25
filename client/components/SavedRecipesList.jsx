import React from 'react';
import SavedRecipe from './SavedRecipe.jsx';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

const SavedRecipesList = ({
  savedRecipes,
  getSavedRecipes,
  calorieCount,
  setCalorieCount,
}) => {
  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {savedRecipes.map((savedRecipe, index) => (
          <Grid item key={index} xs={2} sm={3} md={4}>
            <SavedRecipe
              savedRecipe={savedRecipe}
              key={index}
              getSavedRecipes={getSavedRecipes}
              calorieCount={calorieCount}
              setCalorieCount={setCalorieCount}
            />
          </Grid>
        ))}
      </Grid>
    </Container>

    // <div className='saved_recipe'>
    //   {savedRecipes.map((savedRecipe, index) => {
    //     return <SavedRecipe savedRecipe={savedRecipe} key={index} getSavedRecipes={ getSavedRecipes }/>;
    //   })}
    // </div>
  );
};

export default SavedRecipesList;
