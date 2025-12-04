const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/authController");


router.post("/login", usuarioController.loginUsuario);

module.exports = router;
