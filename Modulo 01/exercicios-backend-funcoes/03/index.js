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
  imprimirResumo: function () {
    console.log("Cliente: " + this.nomeDoCliente);
    console.log("Total de itens: " + this.calcularTotalDeItens() + " itens");
    console.log("Total a pagar: R$" + this.calcularTotalAPagar().toFixed(2));
  },
  imprimirDetalhes: function () {
    console.log("Cliente: " + this.nomeDoCliente);
    this.produtos.forEach((produto, index) => {
      console.log(
        `Item ${index + 1} - ${produto.nome} - ${produto.qtd} und - R$ ${(
          (produto.qtd * produto.precoUnit) /
          100
        ).toFixed(2)}`
      );
    });
    console.log("Total de itens: " + this.calcularTotalDeItens() + " itens");
    console.log("Total a pagar: R$" + this.calcularTotalAPagar().toFixed(2));
  },
  calcularTotalDeItens: function () {
    let total = 0;
    this.produtos.forEach((produto) => {
      total += produto.qtd;
    });
    return total;
  },
  calcularTotalAPagar: function () {
    let total = 0;
    this.produtos.forEach((produto) => {
      total += produto.qtd * produto.precoUnit;
    });
    return total / 100;
  },
  addProduto: function (produto) {
    const index = this.produtos.findIndex((p) => p.id === produto.id);
    if (index === -1) {
      this.produtos.push(produto);
    } else {
      this.produtos[index].qtd += produto.qtd;
    }
  },
  calcularDesconto: function () {
    const totalItens = this.calcularTotalDeItens();
    const totalAPagar = this.calcularTotalAPagar();
    let desconto = 0;

    if (totalItens > 4) {
      const produtoMaisBarato = this.produtos.reduce((min, produto) =>
        produto.precoUnit < min.precoUnit ? produto : min
      );
      desconto = produtoMaisBarato.precoUnit / 100;
    }

    if (totalAPagar > 100) {
      desconto = Math.max(desconto, totalAPagar * 0.1);
    }

    return desconto;
  },
};

const novaBermuda = {
  id: 2,
  nome: "Bermuda",
  qtd: 3,
  precoUnit: 5000,
};

carrinho.addProduto(novaBermuda);
carrinho.imprimirResumo();

const novoTenis = {
  id: 3,
  nome: "Tenis",
  qtd: 1,
  precoUnit: 10000,
};

carrinho.addProduto(novoTenis);
carrinho.imprimirResumo();
