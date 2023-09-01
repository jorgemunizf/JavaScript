const filaDePedidos = ["pedido 12", "pedido 13", "pedido 14"];

// filaDePedidos[filaDePedidos.length] = "pedido 15";
// filaDePedidos[filaDePedidos.shift()];

// console.log(filaDePedidos);

// percorrer o array
// colocar um novo pedido "pedido 15" para o final da fila
// retirar o primeiro pedido "pedido 12"
// imprimir a fila
filaDePedidos.push("pedido 15");
filaDePedidos.shift();

console.log(filaDePedidos);
