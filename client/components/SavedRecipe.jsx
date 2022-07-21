import React, { useState } from 'react';
import Ingredients from './SavedIngredients.jsx';
import axios from 'axios';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SavedRecipe = ({ savedRecipe, getSavedRecipes }) => {
    const [show, setShow] = useState(false);

    const deleteRecipe = () => {
        axios.delete(`/myrecipes/${savedRecipe._id}`)
            .then(() => {
                console.log('recipe deleted');
                getSavedRecipes();
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        height='140'
        image={ savedRecipe.image}
        alt={ savedRecipe.label }
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {savedRecipe.label}
        </Typography>
        <Typography gutterBottom variant='h6' component='div'>
          {Math.round(savedRecipe.calories)} Calories
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' onClick={() => setShow(!show)}>
          Ingredients
        </Button>
        <Button size='small' onClick={deleteRecipe}>
          Delete
        </Button>
        <Button size='small' href={savedRecipe.url}>
          View Instructions
        </Button>
      </CardActions>
      {show && <Ingredients ingredients={savedRecipe.ingredients} />}
    </Card>




    // <div>
    //   <a href={savedRecipe.recipeLink}> {savedRecipe.name}</a>
    //   <br />
    //   <span>{savedRecipe.calories}</span>
    //   <br />
    //   <button onClick={() => setShow(!show)}>Ingredients</button>
    //   <button>Remove Recipe</button>
    //   {show && <Ingredients ingredients={savedRecipe.ingredients} />}
    // </div>
    );
};

export default SavedRecipe;
