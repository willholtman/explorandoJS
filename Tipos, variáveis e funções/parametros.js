// parametros de função

function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(2, 2));
console.log(soma(20, -20));
console.log(soma(200, 200));
console.log(soma(20, -200));

//parametros x argumentos

//ordem dos parametros

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}
console.log(nomeIdade(40, "Juliana"));



function soma(numero1, numero2) {
    return numero1 + numero2;
}

function multiplica(numero1, numero2) {
    return numero1 * numero2;
}
console.log(multiplica(soma(4,5), soma(3,3)));
