const numeros = [1, 98, -76, 0, 12, 15, 19, 34, 5, 60, 44];

const numerosPares = numeros.filter((numero) => {
  return numero % 2 === 0;
});

console.log(numerosPares);
