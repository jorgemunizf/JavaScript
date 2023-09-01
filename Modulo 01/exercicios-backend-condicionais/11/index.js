//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 100000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

let valorPacela = (rendaMensalEmCentavos * 0.18) / 100;

if (rendaMensalEmCentavos >= 200000) {
  console.log(`O valor da sua parcela esse mês é R$ ${valorPacela} reais`);
} else if (rendaMensalEmCentavos <= 200000) {
  console.log(
    `O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais`
  );
}
