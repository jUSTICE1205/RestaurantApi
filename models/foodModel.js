const mongoose = require("mongoose");

// User Schema
const foodSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Food Title is required"],
  },
  description: {
    type: String,
    required: [true, "Food description is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  imageUrl: {
    type: String,
    default:
      "https://img.freepik.com/free-psd/chalk-italian-food-isolated_23-2150788281.jpg?w=740&t=st=1711250889~exp=1711251489~hmac=446b4a47226235c0de58ce1598056c0d065baa308852ffca40f1c9160a4a7d87",
  },
  category: {
    type: String,
  },
  code: {
    type: String,
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
  },
  rating: {
    type: Number,
    default: 5,
    max: 5,
    min: 1,
  },
});

module.exports = mongoose.model("Foods", foodSchema);
