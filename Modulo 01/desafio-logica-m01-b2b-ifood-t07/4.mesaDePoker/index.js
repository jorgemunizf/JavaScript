function solucao(min, max, valores) {
  //seu codigo aqui

  const valoresPermitidos = (min, max, valores) => {
    return valores.filter((valor) => valor >= min && valor <= max);
  };

  const resultado = valoresPermitidos(min, max, valores);
  console.log(resultado);
}
