// const nome = "Mario Braga";

// function nickname(nome) {
//   const nickname = nome.toLowerCase().replace(/\s/g, "");

//   if (nickname.length > 13) {
//     return "O nickname excede o limite de 13 caracteres.";
//   }

//   return `@${nickname}`;
// }

// console.log(nickname(nome));

const nome = "Gu ido Cerqueira";

const geradorNickname = (nome) => {
  const nomes = nome.trim().toLowerCase().split(" ");
  let nomeSemEspaco = "";

  for (const item of nomes) {
    nomeSemEspaco += item;
  }

  const nickname = nomeSemEspaco.slice(0, 12);

  console.log(`@${nickname}`);
};

geradorNickname(nome);
