function processData(input) {
  const lines = input.trim().split("\n");
  const senhaCorreta = lines[0];
  const palavraDigitada = lines[1];

  let indexSenha = 0;
  for (let i = 0; i < palavraDigitada.length; i++) {
    if (palavraDigitada[i] === senhaCorreta[indexSenha]) {
      indexSenha++;
    }

    if (indexSenha === senhaCorreta.length) {
      console.log("SIM");
      return;
    }
  }

  console.log("NAO");
}
