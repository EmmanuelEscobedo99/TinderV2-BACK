const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY;

// Login
exports.loginUsuario = async (req, res) => {
  try {
    const { correo, password } = req.body;

    // Buscar usuario por email
    const usuario = await Usuario.findOne({ where: { correo } });
    if (!usuario) {
      return res.status(404).json({ ok: false, error: "Usuario no encontrado" });
    }

    // Verificar contraseña
    const passwordCorrecta = await bcrypt.compare(password, usuario.password);
    if (!passwordCorrecta) {
      return res.status(401).json({ ok: false, error: "Contraseña incorrecta" });
    }

    // Generar JWT
    const token = jwt.sign(
      { id: usuario.id, email: usuario.correo, rol: usuario.rol },
      SECRET_KEY,
      { expiresIn: "8h" }
    );

    res.json({ ok: true, user: usuario, token });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
};