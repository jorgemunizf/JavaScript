const { json } = require("body-parser");
const conexao = require("../bancodedados/conexao");

const listarCategorias = async (req, res) => {
  try {
    const categoria = req.categoria;

    const listaCategoria = await conexao.query("select * from categorias");

    return res.status(200).json(listaCategoria.rows);
  } catch (erro) {
    return res.status(400).json({ mensagem: erro.message });
  }
};

module.exports = {
  listarCategorias,
};
