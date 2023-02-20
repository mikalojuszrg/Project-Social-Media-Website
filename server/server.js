const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

const bodyParser = require("body-parser");

app.use(bodyParser.json());

dotenv.config();

const uri = process.env.URI;

const client = new MongoClient(uri);

app.use(cors());

app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});

app.listen(5000, () => {
  console.log("Servers started on port 5000");
});
