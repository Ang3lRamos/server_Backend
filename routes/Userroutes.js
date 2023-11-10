const express = require("express")
const UserController = require("../controller/Usuario_controller");

const api = express.Router();

api.post("/usuarios/login", UserController.login);
api.post("/usuarios/create", UserController.create);
api.delete("/usuarios/delete/:usuario", UserController.deleteUserData);

module.exports = api;