const express = require("express");
const router = express.Router();

//Controllers -> Signup/Register
const {
  registerPostController,
  registerGetController,
} = require("../controllers/registerController");

//Signup Routes:
// GET : /api/v1/signup
router.get("/api/v1/signup", registerGetController);
// POST : /api/v1/signup
router.post("/api/v1/signup", registerPostController);

module.exports = router;
