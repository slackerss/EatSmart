const path = require('path');
const express = require('express');
const http = require('http');
const { Users } = require('./db/index.js');
const { default: axios } = require('axios');

const port = 8000;

const distPath = path.resolve(__dirname, '..', 'dist');

const app = express();

const RECIPE_API_KEY = process.env.API_KEY;
const RECIPE_ID = process.env.API_ID;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(distPath));

app.get('/', (req, res) => {});

app.get('/search', (req, res) => {
  axios
    .get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${RECIPE_ID}&app_key=${RECIPE_API_KEY}`
      //`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=7c2fe60d&app_key=5a7a44cb2b97d5a90ed35cd70dfa2e2c`
    )
    .then((data) => {
      //res.status(200).send(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
      //res.sendStatus(500);
    });
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`listening @ http://127.0.0.1:${port}`);
});
