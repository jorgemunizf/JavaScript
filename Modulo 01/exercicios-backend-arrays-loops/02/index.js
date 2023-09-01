const letras = ["A", "a", "B", "C", "J", "i", "u", "e", "E"];

let encontrar = 0;

for (let letra of letras) {
  if (letra === "E" || letra === "e") {
    encontrar++;
  }
}
//Caso não encontre a letra "E" ou "e"

if (!encontrar) {
  console.log('Nenhuma letra "E" ou "e" foi encontrada.');
} else if (encontrar === 1) {
  console.log('Foi encontrado 1 letra "E" ou "e"');
} else {
  console.log(`Foram encontradas ${encontrar} letras "E" ou "e".`);
}
