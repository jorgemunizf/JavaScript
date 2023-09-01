/*
g) Implemente o método extrato de modo que o retorno desse método seja o seguinte:

Extrato de Maria - Saldo: R$50
Histórico:
Depósito de $100
Saque de $50
*/

const contaBancaria = {
  nome: "Maria",
  saldo: 0,
  historicos: [],
  depositar: function (valor) {
    this.saldo += valor;
    this.historicos[this.historicos.length] = {
      tipo: "Depósito",
      valor: valor,
    };

    console.log(
      `Deposito de R$ ${valor / 100} realizado para o cliente: ${this.nome}.`
    );
  },
  sacar: function (valor) {
    if (valor > this.saldo) {
      console.log(`Saldo insuficiente para o saque de: ${this.nome}.`);
      return;
    }

    this.saldo -= valor;
    (this.historicos[this.historicos.length] = {
      tipo: "Saque",
      valor: valor,
    }),
      console.log(
        `Saque de R$ ${valor / 100} realizado para o cliente: ${this.nome}.`
      );
  },
  extrato: function () {
    console.log(`Extrato de ${this.nome} - Saldo: R$ ${this.saldo / 100}`);
    console.log("Histórico:");
    for (const historico of this.historicos) {
      console.log(`${historico.tipo} de R$ ${historico.valor / 100}`);
    }
  },
};

contaBancaria.depositar(30000);
contaBancaria.sacar(5000);
contaBancaria.extrato();
