const express = require("express");
const rotas = require("./roteador");

const app = express();

app.use(express.json());
app.use(rotas);

app.listen(3000, () => {
  console.log("servidor rodando na porta http://localhost:3000");
});
