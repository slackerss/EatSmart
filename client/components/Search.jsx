/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AppContext } from '../context/AppContext.jsx';
import SearchFeed from './SearchFeed.jsx';

function Search() {
  const { searchResults, searchRecipes } = useContext(AppContext);
  const { register, handleSubmit } = useForm(); // register watches input for changes https://react-hook-form.com/get-started
  const onSubmit = (data, e) => {
    // form data and event
    // submit handler
    searchRecipes(data);
    e.target.reset(); // clear input after search
  };

  return (
    <div className='search-body'>
      <div className='search-bar'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input type='text' {...register('query')} />
            <input type='submit' value='Search' />
          </div>
        </form>
      </div>
      <SearchFeed />
    </div>
  );
}

export default Search;
