const foodModel = require("../models/foodModel");

const createFoodController = async (req, res) => {
  try {
    const { title, description, price, category, code, restaurant, rating } =
      req.body;

    if (!title || !description || !price || !restaurant) {
      return res.status(404).send({
        success: false,
        message: "No restaurant found with the provided ID.",
      });
    }

    const newFood = await foodModel({
      title,
      description,
      price,
      category,
      code,
      restaurant,
      rating,
    });

    await newFood.save();

    res.status(200).send({
      success: true,
      message: "New food created successfull",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createFoodController };
