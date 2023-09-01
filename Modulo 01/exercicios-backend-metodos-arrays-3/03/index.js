const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44, 145];

const maiorNumero = numeros.reduce((acumulador, valorAtual) => {
  return Math.max(acumulador, valorAtual);
});

console.log(maiorNumero);
