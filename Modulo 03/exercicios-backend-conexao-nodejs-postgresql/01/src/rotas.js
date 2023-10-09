const express = require("express");
const {
  cadastrarAutor,
  buscarAutorId,
  cadastrarLivro,
  listarLivros,
} = require("./controladores/controladores");

const rotas = express();

rotas.post("/autor", cadastrarAutor);
rotas.get("/autor/:id", buscarAutorId);
rotas.post("/autor/:id/livro", cadastrarLivro);
rotas.get("/livro", listarLivros);

module.exports = rotas;
