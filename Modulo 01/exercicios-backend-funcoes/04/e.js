/*
e) Implemente o método sacar de modo que o valor passado como argumento seja 
   um número inteiro que representará o valor a ser sacado em centávos. 
   Esse método precisa realizar as seguintes operações:

→ Verificar se o valor é maior que o saldo atual da conta e caso a 
  condição for verdadeira retornar a seguinmte mensagem: 
  Saldo insuficiente para o saque de: Maria. 
  Lembrando que, essa condição sendo verdadeira, as demais operações não poderão 
  serem executadas;

→ Subtrair o valor informado como argumento ao saldo atual da conta caso o valor
  seja menor que o saldo atual da conta;

→ Adicionar um objeto ao array historicos. Esse objeto precisa ter o seguinte 
  formato:

{
    tipo: "Saque",
    valor: 5000, //aqui será o valor informado no argumento do método sacar
}

→ Retornar a seguinte mensagem: Saque de R$50 realizado para o cliente: Maria.
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
};

contaBancaria.depositar(30000);
contaBancaria.sacar(5000);
