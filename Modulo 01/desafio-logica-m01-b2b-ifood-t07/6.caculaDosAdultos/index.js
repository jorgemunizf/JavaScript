function solucao(lista) {
  // seu codigo aqui

  let idadeMinima = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] >= 18) {
      if (idadeMinima === 0 || lista[i] < idadeMinima) {
        idadeMinima = lista[i];
      }
    }
  }

  if (idadeMinima === 0) {
    console.log("CRESCA E APARECA");
  } else {
    console.log(idadeMinima);
  }
}
