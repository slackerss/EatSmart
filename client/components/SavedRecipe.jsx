import React, { useState } from "react";
import axios from 'axios';
import Ingredients from "./SavedIngredients.jsx";
import Button from '@mui/material/Button';

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
        <div>
           <a href={ savedRecipe.recipeLink }> { savedRecipe.name }</a>
           <br />
           <span>{ savedRecipe.calories }</span>
            <br />
            <Button variant="contained" onClick={() => setShow(!show)}>Ingredients</Button>
            <Button variant="outlined" onClick={ deleteRecipe }>Remove Recipe</Button>
            {show &&<Ingredients ingredients={ savedRecipe.ingredients }/>}
        </div>
    );
};

export default SavedRecipe;