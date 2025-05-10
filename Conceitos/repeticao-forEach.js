const listaDeAlunosENotas = [
    {
        nome: 'Ana',
        nota: 7
    },
    {
        nome: 'Pedro',
        nota: 5
    },
    {
        nome: 'Carlos',
        nota: 6
    }
]

listaDeAlunosENotas.forEach(aluno => {
    console.log(`O aluno ${aluno.nome} tem a nota ${aluno.nota}`)
});

