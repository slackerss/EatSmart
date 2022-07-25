# EatSmart
Recipe Search and Calorie Tracking App

# Description
A recipe search app that allow users to search keywords of ingredients or even specific diet. The app will generate a list of recipes according to your search. Each recipe in the search feed will display the calories per serving and the macronutrients(fat, carbs, protein) so the user can make a healthy decision. The user can signup and make a profile to start saving recipes that you've searched. In the profile, users can input their information that would be calculated to retrieve their daily calorie intake. Users can also log recipes that they've saved and the calorie calculator will deduct the calories from the logged recipe from their calorie count. This takes the guess work out of knowing how much to eat in a day. 

# Application 
Health/Food

# Tech Stack
1. Express
2. Mongo/Mongoose
3. AWS
4. React
5. Auth0
6. Material-UI
7. Axios

# API 
https://developer.edamam.com/edamam-docs-recipe-api

# Installation and Start-up
## Server/initial Setup
1. Fork slackerss/slackerss repo
2. Clone your forced repo to your local system
3. Run npm install to install dependancies
4. Create a .env file in your main directory.
5. Compile your files to create bundle.
6. Start the server

## ADD TO YOUR .ENV
1. the DB_Connect variable is assigned to your database connection string including your credentials and database name.
2. the RECIPES_API_KEY and API_ID are for the edamam recipe search api
3. Our application uses auth0, The last two variables in the .env example are for the domain key and client id which auth0 provides after you set up your application. Keep in mind when setting up auth0 that this is a single page react application.
https://auth0.com/docs/quickstart/spa/react/interactive this link will help getting auth0 setup for this project.

# Developer Guide

## Client Side
### SavedRecipeList
1. SavedRecipeList is rendered through the Profile component.
2. 

## Server Side