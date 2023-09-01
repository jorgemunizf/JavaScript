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
    let precoTotalItensTexto = `${this.calcularTotalAPagar / 100}`;

    console.log(`Cliente: ${this.nomeDoCliente}`);
    console.log(`Total de itens: ${this.calcularTotalDeItens} itens`);
    console.log(`Total a pagar: R$ ${precoTotalItensTexto}`);
  },
  addProduto: function (produto) {
    let indiceProdutoExistente = -1;

    for (let i = 0; i < this.produtos.length; i++) {
      if (this.produtos[i].id === produto.id) {
        indiceProdutoExistente = i;
        break;
      }
    }

    if (indiceProdutoExistente === -1) {
      this.produtos[this.produtos.length] = produto;
    } else {
      this.produtos[indiceProdutoExistente].qtd += produto.qtd;
    }
  },
  imprimirDetalhes: function () {
    console.log(`Cliente: ${this.nomeDoCliente}`);
    console.log("");

    let qtdTotalItens = this.calcularTotalDeItens();
    let precoTotalItens = this.calcularTotalAPagar();

    for (let i = 0; i < this.produtos.length; i++) {
      let produto = this.produtos[i];

      console.log(
        `Item ${i + 1} - ${produto.nome} - ${produto.qtd} und - R$ ${
          produto.precoUnit / 100
        }`
      );
    }

    let precoTotalItensTexto = `${precoTotalItens / 100}`;

    console.log(``);
    console.log(`Total de itens: ${qtdTotalItens} itens`);
    console.log(`Total a pagar: R$ ${precoTotalItensTexto}`);
  },

  calcularTotalDeItens: function () {
    let qtdTotalItens = 0;

    for (let produto of this.produtos) {
      qtdTotalItens += produto.qtd;
    }
    return qtdTotalItens;
  },

  calcularTotalAPagar: function () {
    let precoTotalItens = 0;

    for (let produto of this.produtos) {
      precoTotalItens += produto.qtd * produto.precoUnit;
    }

    return precoTotalItens;
  },
};

const novaBermuda = {
  id: 2,
  nome: "Bermuda",
  qtd: 3,
  precoUnit: 5000,
};
carrinho.addProduto(novaBermuda);

const novoTenis = {
  id: 3,
  nome: "Tenis",
  qtd: 1,
  precoUnit: 10000,
};
carrinho.addProduto(novoTenis);

carrinho.imprimirResumo();
carrinho.imprimirDetalhes();
