const userModel = require("../models/userModel");

const getUserController = async (req, res) => {
  try {
    const user = await userModel.findById({ _id: req.body.id });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
    user.password = undefined;

    res.status(200).send({
      success: true,
      message: "successfull",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUserController = async (req, res) => {
  try {
    const user = await userModel.findById({ _id: req.body.id });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    //update

    const { username, email, address, phone } = req.body;

    if (username) user.username = username;
    if (email) user.email = email;
    if (address) user.address = address;
    if (phone) user.phone = phone;

    await user.save();
    res.status(200).send({
      success: true,
      message: "Update successfull",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteUserController = async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete({ _id: req.body.id });
    res.status(200).send({
      success: true,
      message: "delete successfull",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUserController,
  updateUserController,
  deleteUserController,
};
