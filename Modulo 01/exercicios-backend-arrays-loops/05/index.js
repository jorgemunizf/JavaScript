const original = [1, 4, 12, 21, 53, 88, 112];

// const pares = original.filter((numero) => numero % 2 === 0);
// console.log(pares);

let numerosPares = [];
for (let numero of original) {
  if (numero % 2 === 0) {
    numerosPares.push(numero); // insere no array numerosPares
  }
}

console.log(numerosPares);
