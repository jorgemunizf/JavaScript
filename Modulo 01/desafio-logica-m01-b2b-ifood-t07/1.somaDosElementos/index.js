function solucao(lista) {
  //seu codigo aqui
  let resultado = lista.reduce(function (acumulador, item) {
    return acumulador + item;
  });

  console.log(resultado);
}
