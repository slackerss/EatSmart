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

const UserProfile = new Schema({
  connection: String,
  email: {
    type: String,
    unique: true
  },
  weight: Number,
  height: Number,
  age: Number,
  sex: String,
  recipeList: String,
  calorieCount: Number,
});

const Recipes = new Schema({
  name: String,
  image: String,
  ingredients: Array,
  calories: Number,
  recipeLink: String,
  recipe_URI: {
    type: String,
    unique: true,
  },
});
const SavedRecipeSchema = new Schema({
  label: String,
  image: String,
  ingredientLines: Array,
  calories: Number,
  source: String,
  url: String,
});
const SavedRecipe = model('SavedRecipe', SavedRecipeSchema);

async function saveRecipe(recipe) {
  console.log(recipe);
  const newRecipe = new SavedRecipe(recipe);
  await newRecipe.save();
}

module.exports = {
  Users: model('Users', UserProfile),
  RecipeList: model('RecipeList', Recipes),
  SavedRecipe: model('SavedRecipe', SavedRecipeSchema),
  saveRecipe,
};
