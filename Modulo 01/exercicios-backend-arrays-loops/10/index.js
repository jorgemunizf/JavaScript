const numeros = [8, 15, 4, 2];

// let maiorNumero = Math.max(...numeros);
// let menorNumero = Math.min(...numeros);

// let diferencaMaior = maiorNumero - menorNumero;

// console.log(diferencaMaior);

// let maiorNumero = numeros[0];
// let menorNumero = numeros[0];

// for (let i = 1; i < numeros.length; i++) {
//   if (numeros[i] > maiorNumero) {
//     maiorNumero = numeros[i];
//   }
//   if (numeros[i] < menorNumero) {
//     menorNumero = numeros[i];
//   }
// }

// let maiorDiferenca = maiorNumero - menorNumero;
// console.log(maiorDiferenca);

// Usando for dentro do for, ou seja, para cada X ele compara com todos os Y

//let maiorDif = numeros[0] - numeros[1]

let maiorDif = -Number.MAX_VALUE; // Number -> vai representar o maior número possivel, negativo

for (let x of numeros) {
  for (let y of numeros) {
    const difAtual = x - y;

    if (difAtual > maiorDif) {
      maiorDif = difAtual;
    }
  }
}

console.log(maiorDif);
