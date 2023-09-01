const original = [5, 7, 13, 16, 17, 125, 26, 34, 118, 245];

// let novoArray = original.filter(
//   (numero) => (numero >= 10 && numero <= 20) || numero > 100
// );

// console.log(novoArray);

let filtrados = [];

for (let numero of original) {
  if ((numero >= 10 && numero <= 20) || numero > 100) {
    filtrados.push(numero);
  }
}

console.log(filtrados);
