import React, { useState } from "react";
import LoggedRecipe from "./SavedRecipe.jsx";
import axios from 'axios';
import SavedRecipe from "./SavedRecipe.jsx";


const SavedRecipesList = ({ savedRecipes }) => {
    return (
       <div className="saved_recipe">
        {
            savedRecipes.map((savedRecipe, index) => {
               return (
                <SavedRecipe savedRecipe={savedRecipe} key={index}/>
               ) 
            })
        }
       </div> 
    )
}

export default SavedRecipesList;