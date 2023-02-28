const express = require("express");
const router = express.Router();

const {

} = require("../controllers/authController");

const { isAuthenticatedUsers } = require("../middlewares/auth");



module.exports = router;
