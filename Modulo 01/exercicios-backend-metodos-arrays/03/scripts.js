const nomes = [
  "Ford Ká",
  "Ranger",
  "Hilux",
  "Corola",
  "Fusca",
  "Chevete",
  "Brasilia",
];
const posicao = 3;

const encontrarCarro = (carro, posicao) => {
  const carrosCapturados = nomes.slice(posicao, posicao + 3);
  console.log(carrosCapturados.join(" - "));
};

encontrarCarro(nomes, posicao);
