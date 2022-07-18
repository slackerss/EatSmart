const path = require('path');
const express = require('express');
const http = require('http');
const { Users } = require('./db/index.js');
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

app.get('/', (req, res) => {
  console.log('this is get');
});

app.get('/foodlogger', (req, res) => {
  axios
    .get(`https://api.edamam.com/api/nutrition-data?app_id=${NUTRITION_API_ID}&app_key=${NUTRITION_API_KEY}&nutrition-type=logging&ingr=chicken`)
    .then(data => {
      const { calories } = data.data;
      const { FAT, CHOCDF, PROCNT} = data.data.totalNutrients;
      console.log(`calories: ${calories}, fat: ${FAT.quantity}, carbs:${CHOCDF.quantity}, protein:${PROCNT.quantity}`);
    })
})

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`listening @ http://127.0.0.1:${port}`);
});
