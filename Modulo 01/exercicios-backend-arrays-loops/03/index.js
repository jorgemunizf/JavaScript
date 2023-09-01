const numeros = [54, 22, 15, 87, 45, 10, 78, 67, 101, 284];

// let posicao = numeros.indexOf(10);

// for (let item of numeros) {
//   if (item === 10) {
//     console.log(posicao);
//     break;
//   }
// }

// if (posicao === -1) {
//   console.log("-1");
// }

let resposta = -1;

for (let i = 0; i < numeros.length; i++) {
  let numero = numeros[i];
  if (numero === 10) {
    resposta = i;
    break;
  }
}

console.log(resposta);
