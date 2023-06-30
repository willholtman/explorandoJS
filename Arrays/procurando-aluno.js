const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

// function exibeNomeENota(aluno){
//     if(listaDeAlunosEMedias[0].includes(aluno)){
//         const indice = listaDeAlunosEMedias[0].indexOf(aluno);
//         const mediaDoAluno = listaDeAlunosEMedias[1][indice];
//         console.log(`${aluno} tem a média ${mediaDoAluno}.`);
//     }else{
//         console.log("Aluno não encontrado!");
//     }
// }


function exibeNomeENota(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){
        const [alunos, medias] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}.`);

    }else{
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("João")