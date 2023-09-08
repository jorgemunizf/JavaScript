const { Router } = require("express");
const clienteControaldor = require("./controladores/contas");

const rotas = Router();

rotas.get("/", (req, res) => {
  res.status(201).json({ mensagem: "API OK" });
});

rotas.get("/contas", clienteControaldor.listar);
rotas.post("/contas", clienteControaldor.criarConta);
rotas.put("/contas/:numeroConta/usuario", clienteControaldor.atualizarConta);
rotas.delete("/contas/:numeroConta", clienteControaldor.encerrarConta);
rotas.post("/transacoes/depositar", clienteControaldor.deposito);
rotas.post("/transacoes/sacar", clienteControaldor.sacar);
rotas.post("/transacoes/transferir", clienteControaldor.transferir);
rotas.get("/contas/saldo", clienteControaldor.saldo);
rotas.get("/contas/extrato", clienteControaldor.extrato);

module.exports = rotas;
