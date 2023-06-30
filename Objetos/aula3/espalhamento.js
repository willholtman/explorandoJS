const cliente = {
    nome: "joao",
    idade: 24,
    email: "joao@dominio.com",
    telefone: ["11 22334455", "66 77889900"],
};

cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    },
];

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}.`);
    console.log(`Ligando para ${telefoneResidencial}.`);
}

ligarParaCliente(...cliente.telefone);

// const encomenda = {
//     destinatario: cliente.nome,
//     rua: cliente.enderecos[0].rua,
//     numero: cliente.enderecos[0].numero,
// }


const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
}

console.log(encomenda);