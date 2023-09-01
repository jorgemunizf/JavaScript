const cidades = [
  "Salvador",
  "São Paulo",
  "Brasilia",
  "Recife",
  "Rio de Janeiro",
];

const maiorString = cidades.reduce((acumulador, valorAtual) => {
  return valorAtual.length > acumulador.length ? valorAtual : acumulador;
});

console.log(maiorString);
