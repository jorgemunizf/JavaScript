const participantes = [
  { nome: "João" },
  { nome: "Ana" },
  { nome: "Beatriz" },
  { nome: "Maria" },
  { nome: "Ana Clara" },
  { nome: "Joana" },
  { nome: "Augusto" },
  { nome: "Renan" },
  { nome: "Patricia" },
  { nome: "Carlos" },
  { nome: "Renato" },
  { nome: "José" },
  { nome: "Roberto" },
  { nome: "Sara" },
  { nome: "Junior" },
  { nome: "Pedro" },
  { nome: "Vitor" },
  { nome: "Antonio" },
];

for (let posicao = 0; posicao < participantes.length; posicao++) {
  if (participantes[posicao].nome === "Carlos") {
    console.log(
      `Galera... O Carlos está na posição ${posicao + 1}, corre lá!.`
    );
  }
}

// const nomeBuscado = "Carlos";
// let posicao = 0;

// for (let i = 0; i < participantes.length; i++) {
//   if (participantes[i].nome === nomeBuscado) {
//     posicao = i + 1; // Adicionando 1 para ajustar a contagem a partir de 1.
//     break; // Interrompe o loop assim que encontra o Carlos.
//   }
// }

// if (posicao !== -1) {
//   console.log(`Galera... O Carlos está na posição ${posicao}, corre lá!`);
// } else {
//   console.log("Ops, o Carlos não está na festa!");
// }
