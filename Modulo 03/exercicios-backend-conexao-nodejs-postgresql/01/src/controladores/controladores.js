const pool = require("../conexao");

const cadastrarAutor = async (req, res) => {
  const { nome, idade } = req.body;

  if (!nome) {
    return res.status(400).json({ mensagem: "o campo nome é obrigatório." });
  }

  try {
    const { rows } = await pool.query(
      `insert into autores (nome, idade) values ($1, $2) returning *`,
      [nome, idade]
    );

    return res.status(200).json(rows[0]);
  } catch (error) {
    console.log(error.message);
  }
};

const buscarAutorId = async (req, res) => {
  const { id } = req.params;

  try {
    const query = `
      select
        a.id AS autor_id,
        a.nome AS autor_nome,
        a.idade AS autor_idade,
        l.id AS livro_id,
        l.nome AS livro_nome,
        l.genero AS livro_genero,
        l.editora AS livro_editora,
        l.data_publicacao AS livro_data_publicacao
      from autores a
      left join livros l 
      on a.id = l.autor_id
      where a.id = $1
    `;

    const { rows } = await pool.query(query, [id]);

    if (rows.length === 0) {
      return res.status(404).json({ mensagem: "livro não encontrado" });
    }

    const autor = {
      id: rows[0].autor_id,
      nome: rows[0].autor_nome,
      idade: rows[0].autor_idade,
      livros: rows
        .filter((row) => row.livro_id) // Filtrar apenas os resultados com livro_id não nulo
        .map((row) => ({
          id: row.livro_id,
          nome: row.livro_nome,
          genero: row.livro_genero,
          editora: row.livro_editora,
          data_publicacao: row.livro_data_publicacao,
        })),
    };

    res.json(autor);
  } catch (error) {
    console.log(error.message);
  }
};

const cadastrarLivro = async (req, res) => {
  const { id } = req.params;
  const { nome, genero, editora, data_publicacao } = req.body;

  if (!nome) {
    return res.status(400), json({ mensagem: "o campo nome é obrigatório." });
  }

  try {
    const { rows } = await pool.query(
      `insert into livros (nome, genero, editora, data_publicacao, autor_id) values ($1,$2,$3,$4, $5) returning *`,
      [nome, genero, editora, data_publicacao, id]
    );

    return res.status(201).json(rows[0]);
  } catch (error) {
    console.log(error.message);
  }
};

const listarLivros = async (req, res) => {
  try {
    const { rows } = await pool.query(`
    select 
    l.id, l.nome, l.genero, l.editora, l.data_publicacao, 
    a.id AS autor_id, a.nome AS autor_nome, a.idade AS autor_idade 
    from livros l
    join autores a
    on l.autor_id = a.id
    `);

    res.json(rows);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  cadastrarAutor,
  buscarAutorId,
  cadastrarLivro,
  listarLivros,
};
