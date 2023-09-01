const numeros = [3, 24, 1, 8, 11, 7, 15, 65];

// const maiorNumero = Math.max(...numeros);
// console.log(maiorNumero);

// como não se sabe qual o maior numero, iniciamos com primeiro numero do array (numeors[0])

let maiorNumero = numeros[0];

for (let numero of numeros) {
  if (numero > maiorNumero) {
    maiorNumero = numero;
  }
}

console.log(maiorNumero);
