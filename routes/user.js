const express = require("express");
const userController = require("../controllers/user");
const errorHandlingMiddleware = require("../middlewares/errorHandlingMiddleware");
const router = express.Router();

router.post("/authenticate", errorHandlingMiddleware, userController);

module.exports = router;
