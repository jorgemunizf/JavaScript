function processData(input) {
  let linhas = input.trim().split("\n");
  let n = parseInt(linhas[0], 10);

  let coordenadas = [];
  for (let i = 1; i <= n; i++) {
    let coord = linhas[i].split(" ");
    coordenadas.push({
      x: parseFloat(coord[0]),
      y: parseFloat(coord[1]),
    });
  }

  function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }

  let maxDistance = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let distance = calculateDistance(
        coordenadas[i].x,
        coordenadas[i].y,
        coordenadas[j].x,
        coordenadas[j].y
      );
      if (distance > maxDistance) {
        maxDistance = distance;
      }
    }
  }

  console.log(maxDistance.toFixed(6));
}
