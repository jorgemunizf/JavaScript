const { query } = require("express");

const convidados = [
  "Carlos",
  "Amanda",
  "Fernanda",
  "Juliana",
  "Lucas",
  "Roberto",
];

const obterConvidado = (req, res) => {
  // Caso não seja passado o parametro de busca na requisição, mostrar a lista de convidados
  if (!req.query.nome) {
    return res.json(convidados);
  }

  // Encontrar convidados pelo nome, ou seja, o nome do convidado passado na rquisição (query.nome) é igual ao nome que tem no array de convidados
  const convidadoBuscado = convidados.find(
    (convidado) => convidado === req.query.nome
  );

  // Caso não encontre o usuario buscado na solicitação retorna uma mensagem de erro
  if (!convidadoBuscado) {
    return res
      .status(404)
      .json({ mensagem: "O convidado buscado não está presente na lista." });
  }

  return res.json({ mensagem: "Convidado presente." });
};

const cadastrarConvidado = (req, res) => {
  // Pegar as informações do body da rquisição
  const { nome } = req.body;

  // Verificar se foi passado o nome na requisição
  if (!nome) {
    return res.status(400).json({ mensagem: "O campo nome é obrigatorio" });
  }

  // Filtrar se o nome já existe dentro do Array convidados

  const convidadoExistente = convidados.find((convidado) => convidado === nome);

  // Verificar se o nome passado no body da requisição já existe dentro do Array convidados
  if (convidadoExistente) {
    return res.status(400).json({
      mensagem:
        "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também.",
    });
  }

  convidados.push(nome);

  return res.status(201).json({ mensagem: "Convidado adicionado." });
};

const removerConvidado = (req, res) => {
  // Recuperar nome da rota
  const { nome } = req.params;

  // Filtrar se o nome já existe dentro do Array convidados pelo indice atraves no findIndex()

  const indiceConvidadoExistente = convidados.findIndex(
    (convidado) => convidado === nome
  );

  // Caso não encontre o usuario buscado na solicitação retorna uma mensagem de erro
  if (indiceConvidadoExistente < 0) {
    return res.status(404).json({
      mensagem:
        "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido.",
    });
  }

  convidados.splice(indiceConvidadoExistente, 1);

  return res.json({ mensagem: "Convidado removido." });
};

module.exports = {
  obterConvidado,
  cadastrarConvidado,
  removerConvidado,
};
