const express = require("express");
const {
  createRestaurantController,
  getAllRestaurantController,
  getRestaurantController,
  deleteRestaurantController,
} = require("../controllers/restaurantController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/create", authMiddleware, createRestaurantController);

router.get("/getAllRestaurant", authMiddleware, getAllRestaurantController);

router.get("/getRestaurant", authMiddleware, getRestaurantController);

router.delete("/deleteRestaurant", authMiddleware, deleteRestaurantController);

module.exports = router;
