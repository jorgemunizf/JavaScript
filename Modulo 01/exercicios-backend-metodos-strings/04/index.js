let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

identificador = identificador.padStart(6, "0");

let nomeMaiusculo = "";

for (const letra of nome.split(" ")) {
  nomeMaiusculo += `${letra.slice(0, 1).toLocaleUpperCase()}${letra
    .slice(1)
    .toLocaleLowerCase()} `;
}
nome = nomeMaiusculo.trim();
email = email.trim();

console.log(identificador);
console.log(nomeMaiusculo);
console.log(email);
