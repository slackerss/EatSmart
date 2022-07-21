const path = require('path');
const express = require('express');
const http = require('http');
const { Users, RecipeList, saveRecipe } = require('./db/index.js');
const { default: axios } = require('axios');

const RECIPES_API_KEY = process.env.RECIPES_API_KEY;
const RECIPES_API_ID = process.env.RECIPES_API_ID;

const NUTRITION_API_ID = process.env.NUTRITION_API_ID;
const NUTRITION_API_KEY = process.env.NUTRITION_API_KEY;

const port = 8000;

const distPath = path.resolve(__dirname, '..', 'dist');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(distPath));


app.get('/foodlogger', (req, res) => {
  axios
    .get(
      `https://api.edamam.com/api/nutrition-data?app_id=${NUTRITION_API_ID}&app_key=${NUTRITION_API_KEY}&nutrition-type=logging&ingr=chicken`
    )
    .then((data) => {
      const { calories } = data.data;
      const { FAT, CHOCDF, PROCNT } = data.data.totalNutrients;
      console.log(
        `calories: ${calories}, fat: ${FAT.quantity}, carbs:${CHOCDF.quantity}, protein:${PROCNT.quantity}`
      );
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post('/profile', (req, res) => {
  const { user } = req.body;
  const newUser = new Users(user);

  Users.findOne({ username: `${user.username}` })
    .then((result) => {
      if (!result) {
        newUser
          .save()
          .then(() => {
            console.log('New user added');
            res.sendStatus(201);
          })
          .catch((err) => {
            console.error(err);
            res.sendStatus(500);
          });
      }
      console.log('found user');
      res.sendStatus(500);
    })
    .catch((err) => {
      console.log('User already exists', err);
      res.sendStatus(500);
    });
});

app.post('/search/save', (req, res) => {
  const recipe = req.body;

  console.log(req.body);
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
  RecipeList.find({})
    .then((recipes) => {
      res.status(200).send(recipes);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

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
