const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

// let limiteFilaDentro = 5;

// while (filaDeFora.length > 0 && filaDeDentro.length < limiteFilaDentro) {
//   let pessoaTransferida = filaDeFora.shift();
//   filaDeDentro.push(pessoaTransferida);
// }

// console.log(filaDeDentro);
// console.log(filaDeFora);

while (filaDeDentro.length < 5) {
  const primeiroDeFora = filaDeFora.shift();
  filaDeDentro.push(primeiroDeFora);
}

console.log(filaDeDentro);
console.log(filaDeFora);
