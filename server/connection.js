const mongoose = require("mongoose");
require("dotenv").config({ path: __dirname + "/.env" });

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
