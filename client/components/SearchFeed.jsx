import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext.jsx';
import RecipeTile from '../components/RecipeTile.jsx';

function SearchFeed() {
  const { searchResults, searchRecipes } = useContext(AppContext);

  let recipeResults;

  if (searchResults !== '404') {
    recipeResults = searchResults.map(({ recipe }) => {
      const { label, image, source, url, ingredientLines, calories, uri} = recipe;
      return (
        <RecipeTile
          label={label}
          image={image}
          url={url}
          source={source}
          ingredientLines={ingredientLines}
          calories={calories/recipe.yield}
          key={uri}
          uri={uri}
          servings={recipe.yield}
        />
      );
    });
  } else {
    return (
      <div>
        <h4 className='sub-heading'> Sorry We Found No Results </h4>
      </div>
    );
  }

  return (
    <div className='container'>
      <div className='row'>{recipeResults}</div>
    </div>
  );
}

export default SearchFeed;
