require("dotenv").config();
const seed = require("./seed");
const mongoose = require("mongoose");
const config = { useUnifiedTopology: true, useNewUrlParser: true };
const { MONGODBURL } = process.env;

////// Create the Connection //////
mongoose.connect(MONGODBURL, config);

////// Database Events //////
mongoose.connection
  .on("open", () => {
    console.log("You are Connected to Mongo");
    seed();
    //reseed the characters with the latest data
    setInterval(seed, 900000);
  })
  .on("close", () => console.log("Mongo Connection Closed"))
  .on("error", (error) => console.log(error));

module.exports = mongoose;
