const conexao = require("../bancodedados/conexao");

const cadastrarTransacao = async (req, res) => {
  const { tipo, descricao, data, valor, categoria_id } = req.body;

  try {
    if (!tipo || !descricao || !data || !valor || !categoria_id) {
      return res.status(400).json({
        mensagem: "Todos os campos obrigatórios devem ser informados.",
      });
    }

    if (tipo != "entrada" && tipo != "saída") {
      return res.status(400).json({
        mensagem: "Todos os campos obrigatórios devem ser informados.",
      });
    }

    const categoriaExistente = await conexao.query(
      "select * from categorias where id = $1",
      [categoria_id]
    );

    if (categoriaExistente.rowCount === 0) {
      return res.status(400).json({
        mensagem: "Categoria não encontrada para o usuário logado.",
      });
    }

    const inserirTransacao = await conexao.query(
      `
      insert into transacoes
      (descricao,valor,data,categoria_id,usuario_id,tipo)
      values
      ($1,$2,$3,$4,$5,$6) returning *; 
    `,
      [descricao, valor, data, categoria_id, req.usuario.id, tipo]
    );
    return res.status(201).json(inserirTransacao.rows[0]);
  } catch (error) {
    return res.status(500).json({ mensagem: "ocorreu um erro" });
  }
};

const listarTransacoesLogado = async (req, res) => {
  const { filtro } = req.query;

  try {
    let query = "select * from transacoes where usuario_id = $1";

    if (filtro && Array.isArray(filtro) && filtro.length > 0) {
      query += " and categoria_nome = any($2::text[])";
    }

    const parametrosDoQuery = [req.usuario.id];

    if (filtro) {
      parametrosDoQuery.push(filtro);
    }

    const buscarTransacao = await conexao.query(query, parametrosDoQuery);

    return res.status(200).json(buscarTransacao.rows);
  } catch (error) {
    return res.status(500).json({ mensagem: "ocorreu um erro" });
  }
};

const verificarExtrato = async (req, res) => {
  try {
    const { rows } = await conexao.query(
      "selec * from transacoes where usuario_id = $1",
      [req.usuario.id]
    );

    let totalEntrada = 0;
    let totalSaida = 0;

    rows.forEach((transacao) => {
      if (transacao.tipo === "entrada") {
        totalEntrada += transacao.valor;
      } else if (transacao.tipo === "saida") {
        totalSaida += transacao.valor;
      }
    });

    return res.status(200).json({ entrada: totalEntrada, saida: totalSaida });
  } catch (error) {
    return res.status(500).json({ mensagem: "ocorreu um erro" });
  }
};

const detalharTransacao = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await conexao.query(
      "select * from transacoes where usuario_id = $1",
      [req.usuario.id]
    );
    const transacaoEspecifica = rows.find((item) => {
      return item.id === Number(id);
    });
    if (!transacaoEspecifica) {
      return res.status(400).json({ mensagem: "Transação não encontrada." });
    }
    return res.json(transacaoEspecifica);
  } catch (error) {
    return res.status(500).json({ mensagem: "ocorreu um erro" });
  }
};

const atualizarTransacao = async (req, res) => {
  const { id } = req.params;
  const { descricao, valor, data, categoria_id, tipo } = req.body;

  if (!descricao || !valor || !data || !categoria_id || !tipo) {
    return res.status(400).json({
      mensagem: "Todos os campos obrigatórios devem ser informados.",
    });
  }

  const transacaoExistente = await conexao.query(
    "select * from transacoes where id = $1 and usuario_id = $2",
    [id, req.usuario.id]
  );

  if (transacaoExistente.rowCount === 0) {
    return res.status(404).json({ mensagem: "Transação não encontrada." });
  }

  const categoriaExistente = await conexao.query(
    "select * from categorias where id = $1",
    [categoria_id]
  );

  if (categoriaExistente.rowCount === 0) {
    return res.status(400).json({ mensagem: "Categoria não encontrada." });
  }

  if (tipo !== "entrada" && tipo !== "saida") {
    return res.status(400).json({
      mensagem: "O tipo deve ser 'entrada' ou 'saida'.",
    });
  }

  try {
    const alterandoTransacao = await conexao.query(
      `update transacoes 
      set
      descricao = $1,
      valor = $2,
      data = $3,
      categoria_id = $4,
      tipo = $5
      where id = $6; `,
      [descricao, valor, data, categoria_id, tipo, id]
    );

    return res.status(200).json();
  } catch (error) {
    return res.status(500).json({ mensagem: "ocorreu um erro" });
  }
};

const deletarTransacao = async (req, res) => {
  const { id } = req.params;

  try {
    const deletandoTransacao = await conexao.query(
      "delete from transacoes where id = $1",
      [id]
    );
    return res.status(201).json();
  } catch (error) {
    return res.status(500).json({ mensagem: "ocorreu um erro" });
  }
};

module.exports = {
  listarTransacoesLogado,
  detalharTransacao,
  cadastrarTransacao,
  atualizarTransacao,
  deletarTransacao,
  verificarExtrato,
};
