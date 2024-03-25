const express = require("express");
const {
  getUserController,
  updateUserController,
  deleteUserController,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Register

router.get("/getUser", authMiddleware, getUserController);

//update user
router.post("/updateUser", authMiddleware, updateUserController);

//update user
router.delete("/deleteUser", authMiddleware, deleteUserController);

module.exports = router;
