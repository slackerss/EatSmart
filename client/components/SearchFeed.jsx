import React from 'react';
import { AppContext } from '../context/AppContext.jsx';

function SearchFeed() {
  const { searchResults, searchRecipes } = useContext(AppContext);

  let recipeResults;

  if (searchResults !== '404') {
    recipeResults = searchResults.map((recipe) => {
      return <RecipeTile />;
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
