console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 17;
const estaAcompanhada = true;
console.log("Destinos possíveis:");
console.log(listaDeDestinos);


// if (idadeComprador >= 18) {
//     console.log("comprador maior de idade")
//     listaDeDestinos.splice(1, 1); //removendo item
// } else if (estaAcompanhada) {
//     console.log("Comprador esta acompanhado");
//     listaDeDestinos.splice(1, 1); //removendo item
// } else {
//     console.log("Comprador menor de idade e não posso vender")
// }

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Boa viagem")
    listaDeDestinos.splice(1, 1); //removendo item
} else {
    console.log("Comprador menor de idade e não posso vender")
}

console.log(listaDeDestinos);

