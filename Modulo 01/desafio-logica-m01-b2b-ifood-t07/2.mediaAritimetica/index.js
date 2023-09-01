function solucao(lista) {
  //seu codigo aqui
  function solucao(lista) {
    //seu codigo aqui
    let resultado = lista.reduce(function (acumulador, item) {
      return acumulador + item;
    });

    let mediaPorDia = resultado / lista.length;
    console.log(mediaPorDia);
  }

  solucao(lista);
}
