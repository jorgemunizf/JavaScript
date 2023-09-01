const cpf = "011.022.033-44";
const cnpj = "19.345.456/0001-09";

const removerPontuacao = (cpfOuCnpj) => {
  let resultado = "";

  for (let i = 0; i < cpfOuCnpj.length; i++) {
    let caractere = cpfOuCnpj.charAt(i);

    if (caractere >= "0" && caractere <= "9") {
      resultado += caractere;
    }
  }
  return resultado;
};

console.log(removerPontuacao(cpf));
console.log(removerPontuacao(cnpj));

// function removePontuacao(cpfOuCnpj) {
//   const cpfCnpjSemPontuacao = cpfOuCnpj.replace(/[^\d]+/g, "");
//   console.log(cpfCnpjSemPontuacao);
// }

// removePontuacao(cpf);
// removePontuacao(cnpj);
