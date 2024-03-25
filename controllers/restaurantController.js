const restaurantModel = require("../models/restaurantModel");
const userModel = require("../models/restaurantModel");

const createRestaurantController = async (req, res) => {
  try {
    const { name, imageUrl, foods, time, logoUrl } = req.body;
    const restuarant = new restaurantModel({
      name,
      imageUrl,
      foods,
      time,
      logoUrl,
    });
    await restuarant.save();

    res.status(200).send({
      success: true,
      message: "New restaurant created successfull",
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllRestaurantController = async (req, res) => {
  try {
    const restaurants = await restaurantModel.find({});
    res.status(200).send({
      success: true,
      message: "New restaurant created successfull",
      restaurants,
    });
  } catch (error) {
    console.log(error);
  }
};

const getRestaurantController = async (req, res) => {
  const { id } = req.body;
  try {
    // Input validation
    if (!id) {
      return res.status(400).send({
        success: false,
        message: "Restaurant ID is required.",
      });
    }

    // Finding the restaurant
    const restaurant = await restaurantModel.findOne({ id: id });

    // Checking if the restaurant exists
    if (!restaurant) {
      return res.status(404).send({
        success: false,
        message: "No restaurant found with the provided ID.",
      });
    }

    // Sending the restaurant data
    return res.status(200).send({
      success: true,
      restaurant,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Internal server error.",
    });
  }
};

const deleteRestaurantController = async (req, res) => {
  const { name } = req.body;
  try {
    // Input validation
    if (!name) {
      return res.status(400).send({
        success: false,
        message: "Restaurant ID is required.",
      });
    }

    // Finding the restaurant
    const restaurant = await restaurantModel.findOneAndDelete({ name: name });

    // Checking if the restaurant exists
    if (!restaurant) {
      return res.status(404).send({
        success: false,
        message: "No restaurant found with the provided ID.",
      });
    }

    // Sending the restaurant data
    return res.status(200).send({
      success: true,
      restaurant,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Internal server error.",
    });
  }
};

module.exports = {
  createRestaurantController,
  getAllRestaurantController,
  getRestaurantController,
  deleteRestaurantController,
};
