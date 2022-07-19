import React from 'react';
import { AppContext } from '../context/AppContext.jsx';

function SearchFeed() {
  const { searchResults, searchRecipes } = useContext(AppContext);

  let recipeResults;

  return (
    <div className='container'>
      <div className='row'>{recipeResults}</div>
    </div>
  );
}

export default SearchFeed;
