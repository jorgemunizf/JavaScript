function solucao(texto) {
  const palavras = texto.split(/\s+/).filter((palavra) => palavra !== "");
  console.log(palavras.length);
}
