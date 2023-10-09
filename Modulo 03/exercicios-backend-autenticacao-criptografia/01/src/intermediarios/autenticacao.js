const jwt = require("jsonwebtoken");
const senhasJwt = require("../senhasJwt");

const verificarUsuarioLogado = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ mensagem: "Não autorizado" });
    }

    const token = authorization.split(" ")[1];

    const assinatura = jwt.verify(token, senhasJwt);

    let { iat, exp, ...usuario } = assinatura;
    req.usuario = usuario;

    next();
  } catch (error) {
    console.error(error.message);
    return res.status(401).json({ mensagem: "Não autorizado" });
  }
};

module.exports = verificarUsuarioLogado;
