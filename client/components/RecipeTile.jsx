import React, { useState, useContext } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAuth0 } from '@auth0/auth0-react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AppContext } from '../context/AppContext.jsx';
import Ingredients from './SavedIngredients.jsx';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

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
  servings,
}) {
  const { saveRecipe } = useContext(AppContext);
  const [expanded, setExpanded] = useState(false);
  const { user, isAuthenticated } = useAuth0();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const recipe = {
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
    servings,
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            <RestaurantIcon />
          </Avatar>
        }
        action={
          <IconButton
            aria-label='settings'
            onClick={() => {
              if (!isAuthenticated) {
                alert('you must sign in to save a recipe');
              } else {
                recipe.User_email = user.email;
                return saveRecipe(recipe);
              }
            }}
          >
            <FavoriteIcon />
          </IconButton>
        }
        title={label}
      />
      <CardMedia component='img' height='194' image={image} alt={label} />
      <CardContent>
        <Typography gutterBottom variant='h6' component='div'>
          {Math.round(calories)} Calories
        </Typography>
        <List>
          <ListItem>Fat: {recipe.fat} g</ListItem>
          <ListItem>Carbs: {recipe.carbs} g</ListItem>
          <ListItem>Protein: {recipe.protein} g</ListItem>
        </List>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant='contained' size='small' href={url}>
          View Instructions
        </Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>Ingredients:</Typography>
          <Ingredients ingredients={ingredientLines} />
        </CardContent>
      </Collapse>
    </Card>
  );
}
