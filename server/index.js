const path = require('path');
const express = require('express');
const http = require('http');
const { Users, saveRecipe, SavedRecipe } = require('./db/index.js');
const { default: axios } = require('axios');

const RECIPES_API_KEY = process.env.RECIPES_API_KEY;
const RECIPES_API_ID = process.env.RECIPES_API_ID;

const port = 8000;

const distPath = path.resolve(__dirname, '..', 'dist');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(distPath));


app.post('/search/save', (req, res) => {
  const recipe = req.body;

  
  saveRecipe(recipe)
    .then((data) => {
      console.log('recipe saved');
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('could not save recipe', err);
      res.sendStatus(500);
    });
});

app.get('/search', (req, res) => {
  const { query } = req.query;
  axios
    .get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${RECIPES_API_ID}&app_key=${RECIPES_API_KEY}`
    )
    .then((response) => {
      const { data } = response;
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

app.get("/profile/:email", (req, res) => {
  // Destructre req.params for specific user when setting up client side

  const email = req.params;
 
  // use model method findOne to return the correct user document from the database
  Users.findOne(email)
  .then((userInfo) => {
    if(!userInfo){

      res.sendStatus(404);
    } else {

      // destructure necessary properties from database
      const { age, weight, height, sex } = userInfo
      // assign all properties to an object using object shorthand
      const resData = { age, weight, height, sex}
      res.status(200).send(resData);
    }

  })
  .catch((err) => {
    console.log('Could not get data from database', err);
  })
})

app.put('/profile/:email', (req, res) => {
const { body } = req;
const { email } = req.params;



// model method updateOne identifies profile by email, then updates the appropriate field
Users.findOneAndUpdate({ email }, body)
.then((update) => {
  // if update !== null
  if(update) { 
    res.sendStatus(201);
  } else {
    res.sendStatus(404);
  }
})
.catch((err) => {
  console.error('There was a server error on update',err);
  res.sendStatus(500);
})
})



app.post('/myrecipes', (req, res) => {
  const { recipe } = req.body;

  RecipeList.create(recipe)
    .then((data) => {
      console.log('recipe saved');
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('could not save recipe', err);
      res.sendStatus(500);
    });
});

app.get('/myrecipes', (req, res) => {
  SavedRecipe.find({})
    .then((recipes) => {
      res.status(200).send(recipes);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

app.get('/myrecipes/:_id', (req, res) => {
  const { _id } = req.params;

  SavedRecipe.find({ _id: _id })
    .then(recipe => {
      res.status(200).send(recipe);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
})

app.delete('/myrecipes/:_id', (req, res) => {
  const { _id } = req.params;

  SavedRecipe.deleteOne({ _id })
    .then((response) => {
      if (response.deletedCount) {
        res.sendStatus(200);
      } else {
        res.sendStatus(404);
      }
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
})

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'), (data, err) => {
    
    if (err) {
      res.status(500).send(err);
    }
});
});

const server = http.createServer(app);

app.listen(port, () => {
  console.log(`listening @ http://127.0.0.1:${port}`);
});
