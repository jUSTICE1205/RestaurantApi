const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

const registerController = async (req, res) => {
  try {
    const { username, email, password, phone, address } = req.body;

    ///validation
    if (!username || !email || !password || !address || !phone) {
      return res.status(500).send({
        success: false,
        message: "Please Provide all fields",
      });
    }

    const isExistUser = await userModel.findOne({ email });

    if (isExistUser) {
      return res.status(500).send({
        success: false,
        message: "Email Already Exists",
      });
    }

    //hashing

    const hashedpassword = await bcrypt.hash(password, 10);

    console.log("here");
    const user = await userModel.create({
      username,
      email,
      password: hashedpassword,
      address,
      phone,
    });
    res.status(201).send({
      success: true,
      message: "User Created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in register api",
      error,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(500).send({
        success: false,
        message: "Please provide email and password",
      });
    }

    const user = await userModel.findOne({
      username: username,
    });

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!user || !passwordMatch) {
      return res.status(404).send({
        success: false,
        message: "Invalid Username or Password",
      });
    } else {
    }

    //token
    const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.status(200).send({
      success: true,
      message: "Login successfull",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in register api",
      error,
    });
  }
};

module.exports = { registerController, loginController };
