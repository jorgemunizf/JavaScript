function solucao(numeros) {
  const totalJogadores = numeros.length;
  const somaNumeros = numeros.reduce((acc, num) => acc + num, 0);

  let posicaoGoleiro = ((somaNumeros - 1) % totalJogadores) + 1;

  console.log(posicaoGoleiro);
}
