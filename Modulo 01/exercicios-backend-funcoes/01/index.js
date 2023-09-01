// Nesse exercício vamos simular um sistema de correção de provas e imprimir a quantidade de acertos com a nota do aluno.
// a) Declare uma função de nome corrigirProva que tenha apenas um parâmetro chamado prova. Faça commit do resultado.
// b) Sabendo que o parâmetro prova será sempre um objeto com o seguinte formato:
//Implemente a função corrigirProva de modo que, ao receber um objeto como este como parâmetro, o resultado seja o seguinte.
//O aluno(a) João acertou 3 questões e obteve nota 6

const prova = {
  aluno: "João",
  materia: "Português",
  valor: 10,
  questoes: [
    {
      resposta: "a",
      correta: "b",
    },
    {
      resposta: "c",
      correta: "e",
    },
    {
      resposta: "e",
      correta: "b",
    },
    {
      resposta: "b",
      correta: "a",
    },
    {
      resposta: "c",
      correta: "a",
    },
  ],
};

const corrigirProva = (prova) => {
  let questoesCorretas = 0;

  for (let questao of prova.questoes) {
    if (questao.resposta === questao.correta) {
      questoesCorretas++;
    }
  }

  // quanto vale cada questao da prova
  let valorPorQuestao = prova.valor / prova.questoes.length;

  // qual foi a nota do aluno na prova
  let notaDaProva = valorPorQuestao * questoesCorretas;

  if (questoesCorretas === 0) {
    console.log(`${prova.aluno} não acertou nenhuma questão e obteve nota 0`);
  } else {
    if (questoesCorretas === 1) {
      console.log(
        `O aluno(a) ${prova.aluno} acertou 1 questão e obteve nota ${notaDaProva}`
      );
    } else {
      console.log(
        `O aluno(a) ${prova.aluno} acertou ${questoesCorretas} questões e obteve nota ${notaDaProva}`
      );
    }
  }
};

corrigirProva(prova);

// function corrigirProva(prova) {
//   let acertos = 0;
//   for (let i = 0; i < prova.questoes.length; i++) {
//     if (prova.questoes[i].resposta === prova.questoes[i].correta) {
//       acertos++;
//     }
//   }

//   const nota = (acertos / prova.valor) * 10 * 2;

//   console.log(
//     `O aluno(a) ${prova.aluno} acertou ${acertos} questões e obteve nota ${nota}`
//   );
// }

// console.log(corrigirProva(prova));
