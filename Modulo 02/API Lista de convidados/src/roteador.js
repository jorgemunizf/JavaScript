const express = require("express");
const {
  obterConvidado,
  cadastrarConvidado,
  removerConvidado,
} = require("./controladores/convidados");

const rotas = express();

rotas.get("/convidados", obterConvidado);
rotas.post("/convidados", cadastrarConvidado);
rotas.delete("/convidados/:nome", removerConvidado);

module.exports = rotas;
