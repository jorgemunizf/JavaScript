const carrinho = {
  nomeDoCliente: "Guido Bernal",
  produtos: [
    {
      id: 1,
      nome: "Camisa",
      qtd: 3,
      precoUnit: 3000,
    },
    {
      id: 2,
      nome: "Bermuda",
      qtd: 2,
      precoUnit: 5000,
    },
  ],
};

function imprimirResumoDoCarrinho(carrinho) {
  let qtdTotalItens = 0;
  let precoTotalItens = 0;

  for (let produto of carrinho.produtos) {
    qtdTotalItens += produto.qtd;
    precoTotalItens += produto.qtd * produto.precoUnit;
  }

  let precoTotalItensTexto = `${precoTotalItens / 100}`;

  console.log(`Cliente: ${carrinho.nomeDoCliente}`);
  console.log(`Total de itens: ${qtdTotalItens} itens`);
  console.log(`Total a pagar: R$ ${precoTotalItensTexto}`);
}

imprimirResumoDoCarrinho(carrinho);
