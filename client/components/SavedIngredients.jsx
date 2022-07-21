import React from 'react';

const Ingredients = ({ ingredients }) => {
  return (
    <div>
      {ingredients.map((ingredient, index) => {
        return <ul key={index}>{ingredient}</ul>;
      })}
    </div>
  );
};

export default Ingredients;
