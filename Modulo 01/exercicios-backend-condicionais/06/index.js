const alturaEmCm = 179;

//seu código aqui
const unidade = alturaEmCm > 180 ? "APROVADO" : "REPROVADO";

console.log(unidade);

let libero = "LÍBERO",
  ponteiro = "PONTEIRO",
  oposto = "OPOSTO",
  central = "CENTRAL";
if (alturaEmCm >= 180 && alturaEmCm <= 185) {
  console.log("LÍBERO");
} else if (alturaEmCm >= 186 && alturaEmCm <= 195) {
  console.log("PONTEIRO");
} else if (alturaEmCm >= 196 && alturaEmCm <= 205) {
  console.log("OPOSTO");
} else if (alturaEmCm > 205) {
  console.log("CENTRAL");
}
