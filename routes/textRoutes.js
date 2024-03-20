const express = require("express");
const { testUserController } = require("../controllers/textController");

const router = express.Router();

router.get("/user", testUserController);

module.exports = router;
