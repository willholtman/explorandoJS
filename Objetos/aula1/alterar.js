const pessoa = {
    nome: "Luma",
    profissao: "Engenheira",
};

console.log(pessoa.nome);

console.log(pessoa.telefone);

pessoa.telefone = "11 222334455"

console.log(pessoa.telefone);

pessoa.nome = "Luma Silva";

console.log(pessoa);



const novaPessoa = {
    nome: "Pedro",
};

pessoa = novaPessoa;

// Variáveis do tipo const apenas não podem ser reatribuidas, mas podem ter seu conteúdo interno alterado.