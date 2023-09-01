// const celular = 7199918888;

// const formatarNumeroCelular = (celular) => {
//   if (celular.toString().length === 10) {
//     return `(${celular.toString().substring(0, 2)}) 9 ${celular
//       .toString()
//       .substring(2, 6)}-${celular.toString().substring(6)}`;
//   } else {
//     return `9 ${celular.toString().substring(0, 4)}-${celular
//       .toString()
//       .substring(4)}`;
//   }
// };

// const celularComDDD = 9988420143;
// const celularSemDDD = 85324567;

// console.log(formatarNumeroCelular(celularComDDD));
// console.log(formatarNumeroCelular(celularSemDDD));

function formataCelular(numero) {
  let celular;

  if (numero.length === 8) {
    celular = `9 ${numero.slice(0, 4)}-${numero.slice(4)}`;
    console.log(celular);
  } else if (numero.length === 9) {
    celular = `${numero.slice(0, 1)} ${numero.slice(1, 5)}-${numero.slice(5)}`;
    console.log(celular);
  } else if (numero.length === 10) {
    celular = `(${numero.slice(0, 2)}) 9 ${numero.slice(2, 6)}-${numero.slice(
      6
    )}`;
    console.log(celular);
  } else if (numero.length === 11) {
    celular = `(${numero.slice(0, 2)}) ${numero.slice(2, 3)} ${numero.slice(
      3,
      7
    )}-${numero.slice(7)}`;
    console.log(celular);
  } else {
    console.log("número inválido");
  }
}

formataCelular(celular.toString());
