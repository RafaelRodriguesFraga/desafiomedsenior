const express = require("express");
const AuthController = require("./controllers/AuthController");
const HomeController = require("./controllers/HomeController");
const authMiddleware = require("../src/middlewares/auth");

const routes = express.Router();

routes.post("/autenticar",  AuthController.autenticar);
routes.post("/registrar", AuthController.registrar);

//A partir daqui qualquer rota vai precisar de um Token
routes.use(authMiddleware);
routes.get("/home", HomeController.home)

module.exports = routes;