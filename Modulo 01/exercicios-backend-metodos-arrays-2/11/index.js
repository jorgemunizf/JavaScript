const nomes = [
  "Maria",
  "João",
  "José",
  "Antonio",
  "Beatriz",
  "Camila",
  "amanda",
];

const nomesComLetraA = nomes.filter((nome) => {
  return nome.substring(0, 1).toLocaleLowerCase() == "a";
});

console.log(nomesComLetraA);
