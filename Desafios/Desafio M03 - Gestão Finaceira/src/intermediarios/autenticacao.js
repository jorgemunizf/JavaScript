const jwt = require("jsonwebtoken");
const senhaSecreta = require("../senhaSecreta");

const validarAutenticacao = (req, res, next) => {
  try {
    let { authorization } = req.headers;
    if (!authorization) {
      return res.status(400).json({
        mensagem: "Token ausente no cabeçalho da requisição",
      });
    }

    const token = authorization.split(" ")[1];
    const assinatura = jwt.verify(token, senhaSecreta);

    let { iat, exp, ...usuario } = assinatura;
    req.usuario = usuario;

    next();
  } catch (erro) {
    return res.status(400).json({ mensagem: "Token inválido" });
  }
};

module.exports = {
  validarAutenticacao,
};
