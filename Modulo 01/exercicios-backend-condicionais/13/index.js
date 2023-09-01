//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "debito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento === "credito") {
  valorFinal = (valorDoProduto - valorDoProduto * 0.05) / 100;
} else if (tipoDePagamento === "cheque") {
  valorFinal = (valorDoProduto - valorDoProduto * 0.03) / 100;
} else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
  valorFinal = (valorDoProduto - valorDoProduto * 0.1) / 100;
}

console.log(`Valor a ser pago: R$${valorFinal.toFixed(2)}`);
