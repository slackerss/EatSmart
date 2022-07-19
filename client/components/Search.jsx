/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AppContext } from '../context/AppContext.jsx';

function Search() {
  const { searchResults, searchRecipes } = useContext(AppContext);
  const { register, handleSubmit } = useForm(); // register watches input for changes https://react-hook-form.com/get-started
  const onSubmit = (data, e) => {
    // form data and event
    // submit handler
    searchRecipes(data);
    console.log(searchResults);
    e.target.reset(); // clear input after search
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type='text' {...register('query')} />
        <input type='submit' value='Search' />
      </div>
    </form>
  );
}

export default Search;
