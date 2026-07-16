const express = require("express");
const router = express.Router();

//Controllers -> Login
const {
  loginGetController,
  loginPostController,
} = require("../controllers/loginController");

//Login Route
router.get("/api/v1/login", loginGetController);
router.post("/api/v1/login", loginPostController);

module.exports = router;
