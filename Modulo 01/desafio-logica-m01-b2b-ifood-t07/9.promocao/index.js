function solucao(precos) {
  //seu codigo aqui

  precos.sort((a, b) => a - b);

  let valorTotal = 0;
  for (let i = 0; i < precos.length; i++) {
    valorTotal += precos[i];
  }

  if (precos.length >= 3) {
    valorTotal -= precos[0] / 2;
  }

  console.log(valorTotal);
}
