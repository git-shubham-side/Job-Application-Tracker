const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const path = require("path");
const User = require("./models/User");
const session = require("express-session");

const {
  registerPostController,
  registerGetController,
} = require("./controllers/registerController");

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Session
app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
  }),
);

// FROM DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Error Handler -- Middleware
const errorhandler = require("./middlewares/errorHandler");

// Request Handling
app.get(["/api/v1/landing", "/"], (req, res) => {
  res.render("Landing/landing");
});

//Login Route
app.get("/api/v1/login", (req, res) => {
  res.render("Login/login");
});
app.post("/api/v1/login", (req, res) => {
  console.log(req.body);
});

//Dasbhoard
//GET : /api/v1/dashboard
app.get("/api/v1/dashboard", (req, res) => {
  console.log("From app.js Dashboard Render: request Object--->", req);
  res.render("Dashboard/dashboard");
});

//Signup Routes:
// GET : /api/v1/signup
app.get("/api/v1/signup", registerGetController);
// POST : /api/v1/signup
app.post("/api/v1/signup", registerPostController);

app.use(errorhandler);

module.exports = app;
