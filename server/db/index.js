const mongoose = require('mongoose');

const { Schema, model } = mongoose;
require('dotenv').config();

const URI = process.env.DB_Connect;

mongoose
  .connect(URI)
  .then(() => {
    console.log('connected to database');
  })
  .catch((err) => {
    console.log('mongoose error', err);
  });

<<<<<<< HEAD
const UserProfile = new Schema({
  username: String,
});
=======
const UserProfile = new Schema(
  {
    username: String,
    weight: Number,
    height: Number,
    age: Number,
    sex: String,
    recipeList: String,
    calorieCount: Number
  },
);
>>>>>>> c08d1b1ecc898c9effa2d968bb4fa40e37a98084

const Recipes = new Schema({
  name: String,
  image: String,
  ingredients: Array,
  calories: Number,
  recipeLink: String,
  recipe_URI: {
    type: String,
    unique: true
  }
})

module.exports = {
  Users: model('Users', UserProfile),
  RecipeList: model('RecipeList', Recipes)
};
