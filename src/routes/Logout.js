const express = require("express");
const router = express.Router();
const logoutController = require("../controllers/logoutController");

//Path : /api/v1/logout
router.post("/api/v1/logout", logoutController);

module.exports = router;
