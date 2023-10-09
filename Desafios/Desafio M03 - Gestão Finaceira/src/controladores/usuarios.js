const bcrypt = require("bcrypt");
const conexao = require("../bancodedados/conexao");

const cadastrar = async (req, res, next) => {
  try {
    let { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({
        mensagem: "Preencha os campos obrigatórios: nome, email e senha",
      });
    }

    const usuarioEncontrado = await conexao.query(
      "select * from usuarios where email = $1",
      [email]
    );

    if (usuarioEncontrado.rowCount > 0) {
      return res.status(400).json({
        mensagem: "E-mail informado está vinculado a outro usuário.",
      });
    }

    let senhaCriptografada = await bcrypt.hash(senha, 10);

    const usuarioCriado = await conexao.query(
      "insert into usuarios (nome, email, senha) values ($1, $2, $3) returning id, nome, email",
      [nome, email, senhaCriptografada]
    );

    return res.status(201).json(usuarioCriado.rows[0]);
  } catch (erro) {
    return res.status(400).json({ mensagem: erro.message });
  }
};

const detalharPerfilUsuario = (req, res, next) => {
  try {
    let usuario = req.usuario;

    if (!usuario) {
      return res.status(401).json({
        mensagem:
          "Para acessar este recurso um token de autenticação válido deve ser enviado.",
      });
    }

    return res.status(200).json(usuario);
  } catch (erro) {
    return res.status(400).json({ mensagem: erro.message });
  }
};

const atualizarUsuario = async (req, res) => {
  try {
    let usuario = req.usuario;
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      return res
        .status(400)
        .json({ mensagem: "Preencha todos os campos obrigatórios" });
    }

    const usuarioEncontrado = await conexao.query(
      "select * from usuarios where email = $1 and id != $2",
      [email, usuario.id]
    );

    if (usuarioEncontrado.rowCount > 0) {
      return res.status(400).json({
        mensagem:
          "O e-mail informado já está sendo utilizado por outro usuário.",
      });
    }

    let senhaCriptografada = await bcrypt.hash(senha, 10);

    const usuarioAtualizado = await conexao.query(
      "update usuarios set nome = $1, email = $2, senha = $3 where id = $4 returning *",
      [nome, email, senhaCriptografada, usuario.id]
    );

    return res.status(201).json();
  } catch (erro) {
    return res.status(400).json({ mensagem: erro.message });
  }
};

module.exports = {
  cadastrar,
  detalharPerfilUsuario,
  atualizarUsuario,
};
