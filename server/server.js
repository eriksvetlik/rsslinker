const express = require("express");
const cors = require("cors");
const database = require("./connection");

require("dotenv").config;

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

database.once("open", () => {
  console.log("mongoDB database connection establised");
});

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
