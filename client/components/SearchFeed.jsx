import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { AppContext } from '../context/AppContext.jsx';
import RecipeTile from '../components/RecipeTile.jsx';

function SearchFeed() {
  const { searchResults } = useContext(AppContext);

  if (searchResults !== '404') {
    return (
      <Container sx={{ pt: 15 }}>
        <Grid
          container
          key='Gridmaster'
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {searchResults.map(({ recipe, index }) => {
            const {
              label,
              image,
              source,
              url,
              ingredientLines,
              calories,
              uri,
              totalNutrients,
            } = recipe;
            return (
              <Grid item key={uri} xs={2} sm={3} md={4}>
                <RecipeTile
                  label={label}
                  image={image}
                  url={url}
                  source={source}
                  ingredientLines={ingredientLines}
                  calories={calories / recipe.yield}
                  fat={Math.round(totalNutrients.FAT.quantity / recipe.yield)}
                  carbs={Math.round(
                    totalNutrients.CHOCDF.quantity / recipe.yield
                  )}
                  protein={Math.round(
                    totalNutrients.PROCNT.quantity / recipe.yield
                  )}
                  key={index}
                  uri={uri}
                  servings={recipe.yield}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    );
  } else {
    return (
      <div>
        <h4 className='sub-heading'> Sorry We Found No Results </h4>
      </div>
    );
  }
}
export default SearchFeed;
