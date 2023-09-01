const nomes = [
  "Ana",
  "Joana",
  "Carlos",
  "amanda",
  "Junior",
  "Alberto",
  "antonio",
];
const nomesFiltrados = 0;

const nomesInicialA = [];
for (const nome of nomes) {
  const primeiraLetraDoNome = nome[0];

  if (primeiraLetraDoNome == "A" || primeiraLetraDoNome == "a") {
    nomesInicialA.push(nome);
  }
}
console.log(nomesInicialA);
