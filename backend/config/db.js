const mongoose = require("mongoose");
require("dotenv").config();

const MONGOO_URL = process.env.MONGOO_URL;

const connectToDb = async () => {
  try {
    await mongoose.connect(MONGOO_URL);
    console.log("Connected!");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectToDb;