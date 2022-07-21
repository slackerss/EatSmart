import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AppContext } from '../context/AppContext.jsx';

export default function RecipeTile({
  label,
  image,
  source,
  url,
  ingredientLines,
  calories,
}) {
  const { saveRecipe } = useContext(AppContext);
  const recipe = { label, image, source, url, ingredientLines, calories };
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
        <Typography variant='body2' color='text.secondary'>
          {ingredientLines}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' onClick={() => saveRecipe(recipe)}>
          Save
        </Button>
        <Button size='small' href={url}>
          View Instructions
        </Button>
      </CardActions>
    </Card>
  );
}
