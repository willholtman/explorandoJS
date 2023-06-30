const cliente = {
    nome: "joao",
    idade: 24,
    email: "joao@dominio.com",
    telefone: ["11 22334455", "66 77889900"],
};

// cliente.enderecos = [
//     {
//         rua: "R. Joseph Climber",
//         numero: 1337,
//         apartamento: true,
//         complemento: "ap 934",
//     },
// ];

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")){
    console.error("Erro. É necessário ter um endereço cadastrado.");
};
