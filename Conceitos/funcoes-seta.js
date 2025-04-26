
//função nomeada, com parâmetro, sem retorno
const exibirNomeCachorro = (nome) => {
    console.log(nome)
}

//função nomeada, com parâmetro + valor default, sem retorno
const exibirPorteCachorro = (porte = 'ND') => {
    console.log(porte)
}

//função nomeada, com parâmetro, com retorno
const obterNomeDoDogFormatado = (nome) => {
    return nome.toUpperCase()
}

const obterObjetoCachorro = () => {
    return {
        nome: "Cebola Caramelizada",
        peso: 11.5,
        dogIrmao: {
            nome: 'Billy'
        },
        adotado: true
    }
}

const listarObjetosDog = () => {
    return [{
        nome: 'Bailey Maria',
        peso: 11.5
        }, {
        nome: 'Bailey Maria',
        peso: 11.5
        }]
}
const listarNomesDeDogs = () => {
    const nomes = [
        'Pituca',
        'Marea',
        'Anderson'
    ]

    console.log(`Passou pela função listarNomesDeDogs`)

return nomes
}

//arrow function sem bloco + com return 'automático'
const dobrar = (numero) => numero*2

exibirNomeCachorro("Cebola")
exibirPorteCachorro()
console.log(obterNomeDoDogFormatado("Cebola"))
console.log(obterObjetoCachorro())
console.log(listarObjetosDog())
console.log(listarNomesDeDogs())

console.log(`--------`)

listarNomesDeDogs()

const nomesDeDogs = listarNomesDeDogs()
