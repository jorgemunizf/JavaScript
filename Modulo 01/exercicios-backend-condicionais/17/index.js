//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

let valorParcela = valorDoProduto / quantidadeDoParcelamento / 100;
let quantidadeDeParcelaPaga = valorPago / valorParcela;
let quantidadeRestanteDeParcela =
  quantidadeDoParcelamento - quantidadeDeParcelaPaga;
console.log(
  `Restam ${quantidadeRestanteDeParcela} parcelas de R$ ${valorParcela}`
);
