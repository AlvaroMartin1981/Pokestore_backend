const express = require("express");
const UserController = require("../controllers/userController");
const  authentication  = require('../middlewares/authentication');

const routerUser = express.Router();

routerUser.post("/register", UserController.register);
routerUser.post("/login", UserController.login);
routerUser.get("/info", authentication, UserController.getInfo);
routerUser.post("/logout", authentication, UserController.logout);

module.exports = routerUser;
