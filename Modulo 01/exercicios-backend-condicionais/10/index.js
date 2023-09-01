const caractere = "5";

// Verifica se o caractere é uma vogal maiúscula
if (
  caractere === "A" ||
  caractere === "E" ||
  caractere === "I" ||
  caractere === "O" ||
  caractere === "U"
) {
  console.log("Vogal maiúscula");
}
// Verifica se o caractere é uma vogal minúscula
else if (
  caractere === "a" ||
  caractere === "e" ||
  caractere === "i" ||
  caractere === "o" ||
  caractere === "u"
) {
  console.log("Vogal minúscula");
}
// Verifica se o caractere é uma consoante
else if (/[a-zA-Z]/.test(caractere)) {
  console.log("Consoante");
}
// Verifica se o caractere é um número
else if (/[0-9]/.test(caractere)) {
  console.log("Número");
}

// if (
//   caractere === "A" ||
//   caractere === "E" ||
//   caractere === "I" ||
//   caractere === "O" ||
//   caractere === "U"
// ) {
//   console.log("Vogal maiúscula");
// } else if (
//   caractere === "a" ||
//   caractere === "e" ||
//   caractere === "i" ||
//   caractere === "o" ||
//   caractere === "u"
// ) {
//   console.log("Vogal minúscula");
// } else if (
//   caractere != "A" ||
//   caractere != "E" ||
//   caractere != "I" ||
//   caractere != "O" ||
//   caractere != "U"
// ) {
//   console.log("Consoante");
// } else if (
//   caractere != "a" ||
//   caractere != "e" ||
//   caractere != "i" ||
//   caractere != "o" ||
//   caractere != "u"
// ) {
//   console.log("Consoante");
// } else if (/[0-9]/.test(caractere)) {
//   console.log("Número");
// }
