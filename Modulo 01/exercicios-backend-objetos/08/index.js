// Abaixo, temos uma lista de pessoas. Cada pessoa possui uma lista com um, vários ou nenhum pet.
//Percorra cada pessoa da lista e imprima uma mensagem de acordo com as condições a seguir:
// a. Se a pessoa não tiver pets, a mensagem deve ser: Sou João e não tenho pets.
// b. Se a pessoa tiver mais de um pet, a mensagem deve ser: Sou Ana e tenho 2 pets.
// c. Se a pessoa tiver um pet, a mensagem deve ser: Sou Beatriz e tenho 1 pet.

const usuarios = [
  {
    nome: "João",
    pets: [],
  },
  {
    nome: "Ana",
    pets: ["Pingo", "Lulu"],
  },
  {
    nome: "Beatriz",
    pets: ["Lessie"],
  },
  {
    nome: "Carlos",
    pets: ["Farofa", "Salsicha", "Batata"],
  },
  {
    nome: "Antonio",
    pets: ["Naninha"],
  },
];

for (const { nome, pets } of usuarios) {
  if (pets.length === 0) {
    console.log(`Sou ${nome} e não tenho pets.`);
  } else if (pets.length === 1) {
    console.log(`Sou ${nome} e tenho 1 pet.`);
  } else {
    console.log(`Sou ${nome} e tenho ${pets.length} pets.`);
  }
}
