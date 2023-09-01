// const numeros = [0, 122, 4, 6, 7, 8, 44];
const numeros = [12, 120, 4, 6, 20, 8, 44];

const numeroPar = numeros.every((valor) => {
  return valor % 2 === 0;
});

if (numeroPar) {
  console.log("array válido");
} else {
  console.log("array inválido");
}
