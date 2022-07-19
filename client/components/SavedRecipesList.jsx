import React, { useState } from "react";
import LoggedRecipe from "./SavedRecipe.jsx";
import axios from 'axios';
import SavedRecipe from "./SavedRecipe.jsx";


const FoodLogList = ({ savedRecipes }) => {
    return (
       <div>
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

export default FoodLogList;