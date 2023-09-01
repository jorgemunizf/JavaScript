const comentario = "Esse COVID é muito perigoso e estamos em pandemia!";

const achouCovid = comentario.toLocaleLowerCase().includes("covid");
const achouPandemia = comentario.toLocaleLowerCase().includes("pandemia");

if (achouCovid || achouPandemia) {
  console.log("Comentário bloqueado por conter palavras proibidas.");
} else {
  console.log("Comentário autorizado.");
}
