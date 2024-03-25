const express = require("express");
const { createFoodController } = require("../controllers/foodController");

const router = express.Router();

// Register
router.post("/create", createFoodController);

module.exports = router;
