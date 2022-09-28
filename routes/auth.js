const express = require("express");
const authController = require("../controllers/auth");

const router = express.Router();

//          "auth/register"
router.post("/register", authController.register);

router.post("/login", authController.login);

router.post("/invest", authController.invest);

module.exports = router;
