const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Product = require('./Product'); // Make sure to create this model

// mongoose.connect('mongodb+srv://ketann682:ES5ET4Grarj7aQwB@cluster0.hxaffr8.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("Database is connected..."));
const URI="mongodb+srv://ketann682:ES5ET4Grarj7aQwB@cluster0.hxaffr8.mongodb.net/"
const DB = async () => {
    try {
      const connectionInstance = await mongoose.connect(URI);
      console.log(
        `DB is connected with this instance: ${connectionInstance.connection.host}`
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  module.exports = DB;