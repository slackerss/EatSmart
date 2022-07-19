import React from 'react';

const Search = ({ handleSearch, queryRecipe, handleChange }) => (
  <form onSubmit={handleSearch}>
    <div>
      <input type='text' value={queryRecipe} onChange={handleChange} />
      <input type='submit' value='Search'></input>
    </div>
  </form>
);

export default Search;
