const express = require("express");
const router = express.Router();

const UserController = require("../controllers/userController");
const UserService = require("../services/userService");
const DrinkService = require("../services/drinkService");
const UserInstance = new UserController(new UserService(), new DrinkService());

/* GET home page. */
router.get("/", (req, res, next) => {
  UserInstance.getUsers(req, res);
});

router.get("/user/:name", (req, res, next) => {
  UserInstance.getUserByName(req, res);
});

module.exports = router;
