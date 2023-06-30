const cliente = {
    nome: "joao",
    idade: 24,
    email: "joao@dominio.com",
    telefone: ["11 22334455", "66 77889900"],
};

cliente.endereco = {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
};

console.log(cliente);
console.log(cliente.endereco);

console.log(cliente["endereco"]);