const pessoas = [
  {
    nome: "Antonio",
    idade: 30,
    profissao: "Jornalista",
  },
  {
    nome: "Maria",
    idade: 30,
    profissao: "Jornalista",
  },
  {
    nome: "Ana",
    idade: 21,
    profissao: "Programador",
  },
  {
    nome: "Beatriz",
    idade: 20,
    profissao: "Programador",
  },
  {
    nome: "José",
    idade: 32,
    profissao: "Jornalista",
  },
  {
    nome: "Marcos",
    idade: 30,
    profissao: "Programador",
  },
];

const programadoresMaioresDe20 = pessoas.filter((dado) => {
  return dado.profissao == "Programador" && dado.idade > 20;
});

console.log(programadoresMaioresDe20);

const jornalistasMaioresDe30 = pessoas.filter((dado) => {
  return dado.profissao == "Jornalista" && dado.idade > 30;
});

console.log(jornalistasMaioresDe30);

const jornalistasProgramadoresJovens = pessoas.filter(function (data) {
  return (
    (data.profissao == "Jornalista" || data.profissao == "Programador") &&
    data.idade < 30
  );
});

console.log(jornalistasProgramadoresJovens);
