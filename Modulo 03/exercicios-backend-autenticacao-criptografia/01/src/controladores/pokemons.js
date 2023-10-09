const conexao = require("../conexao");

const cadastrarPokemon = async (req, res) => {
  try {
    const usuarioId = req.usuario.id; // obter o id do usuario logado

    const { nome, apelido, habilidades, imagem } = req.body;

    const resultado = await conexao.query(
      "insert into pokemons (usuario_id, nome, apelido, habilidades, imagem) values ($1,$2,$3,$4,$5) returning *",
      [usuarioId, nome, apelido, habilidades, imagem]
    );

    if (resultado.rows && resultado.rows.length > 0) {
      return res.status(201).json(resultado.rows[0]);
    } else {
      return res.status(500).json("Erro ao cadastrar o Pokémon");
    }
  } catch (error) {
    console.error(error.message);
    return res.status(500).json("Erro interno do servidor");
  }
};

const atualizarPokemon = async (req, res) => {
  const { id } = req.params;
  const { apelido } = req.body;

  try {
    const { rowCount } = await conexao.query(
      "select * from pokemons where id = $1",
      [id]
    );

    if (rowCount < 0) {
      return res.status(404).json({ mensagem: "Pokemon não encontrado" });
    }

    const { rows: atualizacaoPokemon } = await conexao.query(
      "update pokemons set apelido = $1 where id = $2 returning *",
      [apelido, id]
    );

    return res.status(200).json(atualizacaoPokemon[0]);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json("Erro interno do servidor");
  }
};

const listarPokemons = async (req, res) => {
  try {
    const pokemon = req.pokemon;
    const { rows } = await conexao.query("select * from pokemons");
    return res.status(200).json(rows);
  } catch (erro) {
    return res.status(400).json({ mensagem: erro.message });
  }
};

const obterPokemonPorId = async (req, res) => {
  try {
  } catch (error) {
    console.error(error.message);
    return res.status(500).json("Erro interno do servidor");
  }
};

module.exports = {
  cadastrarPokemon,
  atualizarPokemon,
  listarPokemons,
  obterPokemonPorId,
};
