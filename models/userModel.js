const mongoose = require("mongoose");

// User Schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    password: {
      type: String,
      required: [true, "username is required"],
    },
    address: {
      type: Array,
    },
    phone: {
      type: String,
      required: [true, "phone Number is required"],
    },
    userType: {
      type: String,
      required: [true, "username is required"],
      default: "client",
      enum: ["client", "admin", "vendor"],
    },
    profile: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3ASample_User_Icon.png&psig=AOvVaw0XFoNPtuSdG9_4XjBVO4N0&ust=1710873941511000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNDcu528_oQDFQAAAAAdAAAAABAE",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
