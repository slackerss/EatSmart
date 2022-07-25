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
    unique: true,
  },
  weight: Number,
  height: Number,
  age: Number,
  sex: String,
  recipeList: String,
  calorieCount: Number,
});

const SavedRecipeSchema = new Schema({
  label: String,
  image: String,
  ingredientLines: Array,
  calories: Number,
  fat: Number,
  carbs: Number,
  protein: Number,
  source: String,
  url: String,
  uri: String,
  servings: Number,
  User_email: String,
});
const SavedRecipe = model('SavedRecipe', SavedRecipeSchema);

async function saveRecipe(recipe) {
  const newRecipe = new SavedRecipe(recipe);
  await newRecipe.save();
}

module.exports = {
  Users: model('Users', UserProfile),
  SavedRecipe: model('SavedRecipe', SavedRecipeSchema),
  saveRecipe,
};
