const clientes = require("../aula5/clientes.json");

function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor));
}

const encontrado = encontrar(clientes, "nome", "Kirby");

const encontrado2 = encontrar(clientes, "telefone", "5896279799");

console.log(encontrado);
console.log(encontrado2);