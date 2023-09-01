let capital = 1000, taxa = 0.125, tempo = 5
let montante = ((1 + taxa) ** tempo) * capital

console.log(montante.toFixed(2))