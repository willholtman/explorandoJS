const nomes = ["Evaldo", "Mari", "Camila"];

nomes.forEach(function(nome){
    console.log(nome);
})

nomes.forEach((nome) => {
    console.log(nome);
})

function imprimeNome(nome) {
    console.log(nome);
}

nomes.forEach(imprimeNome);



const arrayNums = [1, 2, 3, 4]

function multiplicaPorDez(num) {
    return num * 10
}

const arraySomada = arrayNums.map(multiplicaPorDez)

console.log(arraySomada);

