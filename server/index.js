const path = require('path');
const express = require('express');
const http = require('http');
const { Users } = require('./db/index.js');

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

app.get(`/api/nutrition-data?app_id=${NUTRITION_API_ID}&app_key=${NUTRITION_API_KEY}&nutrition-type=logging&ingr=chicken`, (req, res) => {
  console.log('this is get');
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`listening @ http://127.0.0.1:${port}`);
});
