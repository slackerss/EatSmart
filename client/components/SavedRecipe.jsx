import React, { useState } from 'react';
import Ingredients from './SavedIngredients.jsx';

const SavedRecipe = ({ savedRecipe }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <a href={savedRecipe.recipeLink}> {savedRecipe.name}</a>
      <br />
      <span>{savedRecipe.calories}</span>
      <br />
      <button onClick={() => setShow(!show)}>Ingredients</button>
      <button>Remove Recipe</button>
      {show && <Ingredients ingredients={savedRecipe.ingredients} />}
    </div>
  );
};

export default SavedRecipe;
