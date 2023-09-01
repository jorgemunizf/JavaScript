// const numeroCartao = "1111222233334444";
const numeroCartao = "7986509750398734";

// const esconderNumeroCartao =
//   numeroCartao.slice(0, 4) +
//   "*".padEnd(numeroCartao.length - 8, "*") +
//   numeroCartao.slice(-4);
// console.log(esconderNumeroCartao);

const numerosIniciais = numeroCartao.slice(0, 4);
const numerosFinais = numeroCartao.slice(12);

const numeroCartaoFormatado = `${numerosIniciais.padEnd(
  8,
  "*"
)}${numerosFinais.padStart(8, "*")}`;

console.log(numeroCartaoFormatado);
