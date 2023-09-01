const nomeArquivo = "Foto da Familia.png";

function validarArquivo(nomeArquivo) {
  const extensoesPermitidas = ["jpg", "jpeg", "gif", "png"];
  const extensao = nomeArquivo.split(".").pop().toLowerCase();

  if (extensoesPermitidas.includes(extensao)) {
    return "Arquivo válido";
  } else {
    return "Arquivo inválido";
  }
}

const nomeArquivo1 = "Foto da Familia.pdf";
console.log(validarArquivo(nomeArquivo1));

const nomeArquivo2 = "Foto da Familia.png";
console.log(validarArquivo(nomeArquivo2));
