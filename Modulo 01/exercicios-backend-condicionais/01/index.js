const jogada1 = "papel";
const jogada2 = "pedra";

//seu código aqui
// if (jogada1 === "pedra") {
//     if (jogada2 === "tesoura") {
//        console.log("pedra");
//    } else if (jogada2 === "papel"){
//        console.log("papel");
//    } else if (jogada2 === "pedra") {
//        console.log("empate");
//    }
// }
// else if (jogada1 === "tesoura") {
//    if (jogada2 === "pedra") {
//        console.log("Pedra");
//    } else if (jogada2 === "papel"){
//        console.log("tesoura");
//    } else if (jogada2 === "tesoura") {
//        console.log("empate");
//    }
// }

// else if (jogada1 === "papel"){
//    if (jogada2 === "pedra") {
//        console.log("papel");
//    }else if (jogada2 === "tesoura") {
//        console.log("Tesoura");
//    }else if (jogada2 === "papel")  {
//        console.log("Empate");
//    }
// }

if (jogada1 === jogada2) {
  console.log("empate");
} else {
  if (jogada1 === "pedra") {
    if (jogada2 === "tesoura") {
      console.log("pedra ganhou");
    } else {
      console.log("papel ganhou");
    }
  } else if (jogada1 === "tesoura") {
    if (jogada2 === "pedra") {
      console.log("pedra ganhou");
    } else {
      console.log("tesoura ganhou");
    }
  } else {
    jogada2 === "pedra"
      ? console.log("papel ganhou")
      : console.log("tesoura ganhou");
  }
}
