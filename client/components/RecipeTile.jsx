import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AppContext } from '../context/AppContext.jsx';
import { useAuth0 } from '@auth0/auth0-react';


export default function RecipeTile({
  label,
  image,
  source,
  url,
  ingredientLines,
  calories,
  fat,
  carbs,
  protein,
  uri,
  servings
}) {
  const { user, isAuthenticated } = useAuth0();
  const { saveRecipe } = useContext(AppContext);
   const recipe = { label, image, source, url, ingredientLines, calories, fat, carbs, protein, uri, servings};

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        height='140'
        image={image}
        alt='recipe image'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {label}
        </Typography>
        <Typography gutterBottom variant='h6' component='div'>
          {Math.round(calories)} Calories
        </Typography>
        <Typography>
          Fat: {fat}
          Carbs: {carbs}
          protein: {protein}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {ingredientLines}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' onClick={() => {
          if (!isAuthenticated) {
            alert('you must sign in to save a recipe');
          } else {
            recipe.User_email = user.email
            return saveRecipe(recipe)

          }
        }}>
          Save
        </Button>
        <Button size='small' href={url}>
          View Instructions
        </Button>
      </CardActions>
    </Card>
  );
}
