// declaração de função

function minhaFuncao(param) {
    // bloco de codigo
}

minhaFuncao("param");


// expressao de funcao

const Soma = function(num1, num2) {return num1 + num2}
console.log(Soma(1, 1));


// diferença principal: HOISTING
// funções e var são "listadas" no topo do arquivo

console.log(apresentar());

function apresentar() {
    return "oi";
}

console.log(soma(1, 1))
const soma = function(num1, num2) {
    return num1 + num2
}