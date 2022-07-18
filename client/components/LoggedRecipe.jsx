import React from "react";

const LoggedRecipe = ({name, cal, fat, carb, protein}) => {
    return (
        <div>
            <ul>
                <li>Recipe Name: {name}</li>
                <li>Calories: {cal}</li>
                <li>Fat: {fat}</li>
                <li>Carbs: {carb}</li>
                <li>Protein: {protein}</li>
            </ul>
        </div>
    );
};

export default LoggedRecipe;