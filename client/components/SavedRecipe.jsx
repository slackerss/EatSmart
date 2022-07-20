import React, { useState } from "react";
import axios from 'axios';
import Ingredients from "./SavedIngredients.jsx";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const SavedRecipe = ({ savedRecipe, getSavedRecipes }) => {
    const [ show, setShow ] = useState(false);

    const deleteRecipe = () => {
        axios.delete(`/myrecipes/${savedRecipe._id}`)
            .then(getSavedRecipes())
            .catch(err => {
                console.log('Could not delete');
            })
    }

    return (
        <Card sx={{ maxWidth: 345 }} className="recipe-card">
            <h3 id="recipe-name">{ savedRecipe.name }</h3>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={ savedRecipe.image }
                    alt=""
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Calories: { Math.round(savedRecipe.calories) }
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" size="small" onClick={() => setShow(!show)}>Ingredients</Button>
                <Button variant="contained" size="small" onClick={ deleteRecipe }>Delete</Button>
            </CardActions>
            {show &&<Ingredients ingredients={ savedRecipe.ingredients }/>}
        </Card>

        // <div>
        //    <a href={ savedRecipe.recipeLink }> { savedRecipe.name }</a>
        //    <br />
        //    <span>{ savedRecipe.calories }</span>
        //     <br />
        //     <Button variant="contained" onClick={() => setShow(!show)}>Ingredients</Button>
        //     <Button variant="outlined" onClick={ deleteRecipe }>Remove Recipe</Button>
        //     {show &&<Ingredients ingredients={ savedRecipe.ingredients }/>}
        // </div>
    );
};

export default SavedRecipe;