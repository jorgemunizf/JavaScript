const ladoA = 4;
const ladoB = 4;

if(ladoA === ladoB) {
    console.log("sim")
}else {
    console.log("não")
}
if (ladoA && ladoB === 0) {
    console.log("Bucha de Branco")
}else if (ladoA && ladoB === 1) {
    console.log("Bucha de Ás")
}else if (ladoA && ladoB === 2) {
    console.log("Bucha de Duque")
}else if (ladoA && ladoB === 3) {
    console.log("Bucha de Terno")
}else if (ladoA && ladoB === 4) {
    console.log("Bucha de Quadra")
}else if (ladoA && ladoB === 5) {
    console.log("Bucha de Quina")
}else if (ladoA && ladoB === 6) {
    console.log("Bucha de Sena")
}
