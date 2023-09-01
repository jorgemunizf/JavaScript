// C) Implemente o método depositar de modo que o valor passado como argumento
//   seja um número inteiro que representará o valor a ser depositado em centávos.
//    Esse método precisa realizar as seguintes operações:

// Somar o valor informado como argumento ao saldo atual da conta;

// Adicionar um objeto ao array historicos. Esse objeto precisa ter o
// seguinte formato:

// {
//   tipo: "Depósito",
//   valor: 10000, //aqui será o valor informado no argumento do método depositar
// }

// Retornar a seguinte mensagem: Deposito de R$100 realizado para o cliente:
// Maria.

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
};

contaBancaria.depositar(30000);
