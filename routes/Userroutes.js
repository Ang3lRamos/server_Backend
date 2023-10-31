const express = require("express")
const UserController = require("../controller/Usuario_controller");

const api = express.Router();

api.post("/usuarios/create", UserController.create);

module.exports = api;
