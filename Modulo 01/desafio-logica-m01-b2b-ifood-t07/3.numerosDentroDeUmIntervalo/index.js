function solucao(numero, limiteInferior, limiteSuperior) {
  const provaRealDeDoisNumeros = (numero, limiteInferior, limiteSuperior) => {
    if (numero >= limiteInferior && numero <= limiteSuperior) {
      console.log("PERTENCE");
    } else {
      console.log("NAO PERTENCE");
    }
  };
  provaRealDeDoisNumeros(numero, limiteInferior, limiteSuperior);
}
