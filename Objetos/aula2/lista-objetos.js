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

cliente.enderecos.push({
    rua: "R. Joseph Ledder",
    numero: 404,
    apartamento: false,
})

const listaApenasApartamentos = cliente.enderecos.filter(
    (enderecos) => enderecos.apartamento === true 
);

console.log(cliente.enderecos);
console.log(cliente["enderecos"]);

console.log(listaApenasApartamentos);