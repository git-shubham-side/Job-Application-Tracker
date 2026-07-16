const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController");
const isAuthenticated = require("../middlewares/isAuthenticated");

//Dasbhoard
//GET : /api/v1/dashboard
router.get("/api/v1/dashboard", isAuthenticated, dashboardController);

module.exports = router;
