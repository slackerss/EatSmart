import React, { useState } from "react";
import LoggedRecipe from "./LoggedRecipe.jsx";

const recipesList = [
    {
        name: 'chicken parmesan',
        calories: 500,
        fat: 20,
        carb: 18,
        protein: 15
    },
    {
        name: 'chicken teriyaki',
        calories: 450,
        fat: 15,
        carb: 10,
        protein: 12
    },
    {
        name: 'chicken shawarma',
        calories: 550,
        fat: 13,
        carb: 18,
        protein: 12
    }
];

const FoodLogList = () => {

    const [recipes, setRecipes] = useState(recipesList);

    const handleLogRecipe = () => {
        console.log('clickity clack');
    };

    return (
        <div>
            {
                recipes.map((recipe, index) => {
                    return (
                        <div>
                            <LoggedRecipe
                                key={index}
                                name={recipe.name}
                                cal={recipe.calories}
                                fat={recipe.fat}
                                carb={recipe.carb}
                                protein={recipe.protein} />
                            <button onClick={handleLogRecipe}>Log Recipe</button>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default FoodLogList;