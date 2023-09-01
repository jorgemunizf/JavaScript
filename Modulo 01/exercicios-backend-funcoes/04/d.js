// d) Declare um método sacar no objeto contaBancaria que tenha um argumento valor.

const contaBancaria = {
  nome: "Maria",
  saldo: 0,
  historicos: [],
  depositar: function (valor) {
    this.saldo += valor;
    this.historicos[this.historicos.length] = {
      tipo: "Depósito",

      //aqui será o valor informado no argumento do método depositar
      valor: valor,
    };
    console.log(
      `Deposito de R$ ${valor / 100} realizado para o cliente: ${this.nome}.`
    );
  },
  sacar: function (valor) {},
};

contaBancaria.depositar(30000);
