const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const path = require("path");

app.use(express.static(path.resolve("public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// FROM DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Request Handling
app.get("/", (req, res) => {
  res.json("Server is listening on *");
});

//Login Route
app.get("/api/v1/login", (req, res) => {
  res.render("Login/login");
});
app.post("/api/v1/login", (req, res) => {
  console.log(req.body);
});

//Signup Route :
// GET : /api/v1/signup
app.get("/api/v1/signup", (req, res) => {
  res.render("Signup/signup");
});

//Signup route POST
// POST : /api/v1/signup
app.post("/api/v1/signup", (req, res) => {
  console.log(req.body);
});

module.exports = app;
