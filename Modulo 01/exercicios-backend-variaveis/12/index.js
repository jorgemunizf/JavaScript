let montante = 90000, capital = 60000, tempo = 24

let taxa = (Math.pow((montante / capital), (1 / tempo)) - 1) * 100

console.log(`O seu financiamento de ${capital} reais teve uma taxa de juros de ${taxa.toFixed(3)}%, pois após 24 meses você teve que pagar ${montante} reais`)