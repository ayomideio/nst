const mongoose = require("mongoose");

const Mailerr = mongoose.model(
  "Mailerr",
  new mongoose.Schema({
    appname: String,
    email: String,
    password: String,
  })
);

module.exports = Mailerr;
