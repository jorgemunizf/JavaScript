function solucao(min, km) {
  let custoPorMin = 0;
  let custoPorKm = 0;

  if (min > 20) {
    custoPorMin = 50 * 20 + (min - 20) * 30;
  } else {
    custoPorMin = 50 * min;
  }

  if (km > 10) {
    custoPorKm = 70 * 10 + (km - 10) * 50;
  } else {
    custoPorKm = 70 * km;
  }

  console.log(custoPorMin + custoPorKm);
}
