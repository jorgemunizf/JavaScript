const express = require("express");
const { login } = require("./controladores/login");
const { cadastrarUsuario } = require("./controladores/usuarios");
const verificarUsuarioLogado = require("./intermediarios/autenticacao");
const {
  cadastrarPokemon,
  atualizarPokemon,
  listarPokemons,
} = require("./controladores/pokemons");

const rotas = express();

rotas.post("/usuario", cadastrarUsuario);
rotas.post("/login", login);

rotas.use(verificarUsuarioLogado);

rotas.post("/pokemon", cadastrarPokemon);
rotas.put("/pokemon/:id", atualizarPokemon);
rotas.get("/pokemon", listarPokemons);

module.exports = rotas;
