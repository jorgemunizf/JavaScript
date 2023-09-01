const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

// let somaDosPares = 0;

// numeros.forEach((numero) => {
//   if (numero % 2 === 0) {
//     somaDosPares += numero;
//   }
// });

// console.log(somaDosPares);

// percorrer o array
// verificar se e numero par ( % 2 === 0)
// inserir em uma variavel

let somaDosPares = 0;
for (let numero of numeros) {
  if (numero % 2 === 0) {
    somaDosPares += numero;
  }
}

console.log(somaDosPares);
