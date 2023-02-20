const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");

const bodyParser = require("body-parser");

app.use(bodyParser.json());

dotenv.config();

const uri = process.env.URI;

const client = new MongoClient(uri);

app.use(cors());

// app.get("/users", (req, res) => {
//   res.json({ users: ["userOne", "userTwo", "userThree"] });
// });

app.get("/users", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db("social_media")
      .collection("users")
      .find()
      .toArray();
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/users", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = { name: req.body.name, password: hashedPassword };
    const con = await client.connect();
    const data = await con
      .db("social_media")
      .collection("users")
      .insertOne(user);
    await con.close();
    res.send(data);
  } catch {
    res.status(500).send();
  }
});

app.post("/user/login", async (req, res) => {
  try {
    const con = await client.connect();
    const user = await con
      .db("social_media")
      .collection("users")
      .findOne({ name: req.body.name });
    await con.close();
    if (user === null) {
      return res.status(400).send("Cannot find user");
    }
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send("Success");
    } else {
      res.send("Not Allowed");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

app.listen(5000, () => {
  console.log("Servers started on port 5000");
});
