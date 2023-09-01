const palavras = ["arroz", "feijão", "carne", "frango", "macarrão"];

const existeBebida = palavras.some(function (bebida) {
  return bebida == "cerveja" || bebida == "vodka";
});

if (existeBebida) {
  console.log("revise sua lista, joão. possui bebida com venda proibida!");
} else {
  console.log("tudo certo, vamos as compras!");
}
