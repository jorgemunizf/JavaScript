const express = require("express");
const { login } = require("./controladores/login");
const {
  cadastrar,
  detalharPerfilUsuario,
  atualizarUsuario,
} = require("./controladores/usuarios");
const { validarAutenticacao } = require("./intermediarios/autenticacao");
const { listarCategorias } = require("./controladores/categorias");
const {
  cadastrarTransacao,
  listarTransacoesLogado,
  atualizarTransacao,
  verificarExtrato,
  detalharTransacao,
  deletarTransacao,
} = require("./controladores/transacoes");

const rotas = express();

rotas.post("/usuario", cadastrar);
rotas.post("/login", login);

rotas.use(validarAutenticacao);

rotas.get("/usuario", detalharPerfilUsuario);
rotas.put("/usuario", atualizarUsuario);
rotas.get("/categoria", listarCategorias);
rotas.post("/transacao", cadastrarTransacao);
rotas.get("/transacao", listarTransacoesLogado);
rotas.put("/transacao/:id", atualizarTransacao);
rotas.get("/transacao/extrato", verificarExtrato);
rotas.get("/transacao/:id", detalharTransacao);
rotas.delete("/transacao/:id", deletarTransacao);

module.exports = rotas;
