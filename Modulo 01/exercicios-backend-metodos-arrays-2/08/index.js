const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const arrayModificado = frutas.map((fruta, indice) => {
  return `${indice} - ${fruta.slice(0, 1).toLocaleUpperCase()}${fruta
    .slice(1)
    .toLocaleLowerCase()}`;
});

console.log(arrayModificado);
