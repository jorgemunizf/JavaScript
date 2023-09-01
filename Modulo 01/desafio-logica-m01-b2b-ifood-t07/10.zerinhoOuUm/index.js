function solucao(jogadores) {
  //seu codigo aqui
  let totalDeNumZeros = 0;
  let totalDeNumUm = 0;

  for (const jogador of jogadores) {
    if (jogador.jogada === 0) {
      totalDeNumZeros++;
    } else if (jogador.jogada === 1) {
      totalDeNumUm++;
    }
  }

  if (totalDeNumZeros === 1) {
    const jogadorSorteado = jogadores.find((jogador) => jogador.jogada === 0);
    console.log(jogadorSorteado.nome);
  } else if (totalDeNumUm === 1) {
    const jogadorSorteado = jogadores.find((jogador) => jogador.jogada === 1);
    console.log(jogadorSorteado.nome);
  } else {
    console.log("NINGUEM");
  }
}
