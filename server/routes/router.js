const express = require("express");
const route = express.Router();
const services = require("../services/render");
const controller = require("../controller/Authcontroller");
const newcontrl = require("../controller/controller");
const controller3 = require("../controller/requestdata");

route.get("/", services.homeroutes);
route.post("/", controller3.requestorgandata);
route.get("/register", services.register);
route.get("/login", services.login);
route.get("/profile", services.profile);

//api
route.post("/profile", newcontrl.organdon);
route.post("/register", controller.register);
route.post("/login", controller.login, services.profile);

module.exports = route;
