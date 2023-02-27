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
    const email = req.body.email;
    const con = await client.connect();
    const user = await con
      .db("social_media")
      .collection("users")
      .findOne({ email });
    if (user) {
      await con.close();
      return res.status(409).json({ message: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email,
      password: hashedPassword,
    };
    const data = await con
      .db("social_media")
      .collection("users")
      .insertOne(newUser);
    await con.close();
    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

app.post("/user/login", async (req, res) => {
  try {
    const con = await client.connect();
    const user = await con
      .db("social_media")
      .collection("users")
      .findOne({ email: req.body.email });
    await con.close();
    if (user === null) {
      return res.status(400).send("Cannot find user");
    }
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send(user);
    } else {
      res.send("Not Allowed");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

app.post("/posts", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db("social_media")
      .collection("posts")
      .insertOne(req.body);
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send({
      message: "An error occurred while processing your request",
      error,
    });
  }
});

app.listen(5000, () => {
  console.log("Servers started on port 5000");
});
