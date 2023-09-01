const livros = [
  "Guerra e Paz",
  "A Montanha Mágica",
  "Cem Anos de Solidão",
  "Dom Quixote",
  "A Divina Comédia",
];
const nomeDoLivro = "Guerra e Paz";

const buscarLivro = livros.indexOf(nomeDoLivro) + 1;

console.log(`O livro está na posição ${buscarLivro}`);
