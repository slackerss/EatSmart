const mongoose = require('mongoose');

const { Schema, model } = mongoose;
require('dotenv').config();

const URI = process.env.DB_Connect;

mongoose.connect(URI)
.then(() => {console.log('connected to database');})
    .catch(err => {
        console.log('mongoose error' ,err);
    });

const UserProfile = new Schema(
  {
    username: String,
  },
);

module.exports = {
  Users: model('Users', UserProfile),
};
