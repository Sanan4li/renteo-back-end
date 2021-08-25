const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
// router.get("/login", authController.loginUser_get);
// router.get("/signup", authController.signupUser_get);
router.post("/login", authController.loginUser_post);
router.post("/signup", authController.signupUser_post);
module.exports = router;
