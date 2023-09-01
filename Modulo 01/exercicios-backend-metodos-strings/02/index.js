// Faça um sistema que consiga validar CPF ou CNPJ e
// exibir formatado de acordo com os padrões abaixo.
// Assuma que todos os dígitos que chegam para validação são numéricos:

// a) Formatar CPF

// Validar o tamanho (11 números)
// Imprimir o CPF formatado se for válido

const cpf = "12345678900";
const cnpj = "12345678900";

function formatarCPF(cpf) {
  if (cpf.length !== 11) {
    console.log("CPF Inválido");
  } else {
    const cpfFormatado = `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(
      6,
      9
    )}-${cpf.slice(9)}`;
    console.log(cpfFormatado);
  }
}

function formatarCNPJ(cnpj) {
  if (cnpj.length !== 14) {
    console.log("CNPJ Inválido");
  } else {
    const cnpjFormatado = `${cnpj.slice(0, 2)}.${cnpj.slice(2, 5)}.${cnpj.slice(
      5,
      8
    )}/${cnpj.slice(8, 12)}-${cnpj.slice(12)}`;
    console.log(cnpjFormatado);
  }
}

// Exemplos de uso:

const cpfExemplo1 = "12309";
formatarCPF(cpfExemplo1);

const cpfExemplo2 = "12345678900";
formatarCPF(cpfExemplo2);

const cnpjExemplo1 = "12345678900";
formatarCNPJ(cnpjExemplo1);

const cnpjExemplo2 = "12345678000199";
formatarCNPJ(cnpjExemplo2);
