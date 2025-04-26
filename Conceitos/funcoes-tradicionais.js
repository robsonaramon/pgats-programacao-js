
//função nomeada, com parâmetro, sem retorno
function exibirNomeCachorro(nome){
    console.log(nome)
}

//função nomeada, com parâmetro + valor default, sem retorno
function exibirPorteCachorro(porte = 'ND'){
    console.log(porte)
}

//função nomeada, com parâmetro, com retorno
function obterNomeDoDogFormatado(nome){
    return nome.toUpperCase()
}

function obterObjetoCachorro(){
    return {
        nome: "Cebola Caramelizada",
        peso: 11.5,
        dogIrmao: {
            nome: 'Billy'
        },
        adotado: true
    }
}

function listarObjetosDog() {
    return [{
        nome: 'Bailey Maria',
        peso: 11.5
        }, {
        nome: 'Bailey Maria',
        peso: 11.5
        }]
}
function listarNomesDeDogs() {
    const nomes = [
        'Pituca',
        'Marea',
        'Anderson'
    ]

    console.log(`Passou pela função listarNomesDeDogs`)

return nomes
}

exibirNomeCachorro("Cebola")
exibirPorteCachorro()
console.log(obterNomeDoDogFormatado("Cebola"))
console.log(obterObjetoCachorro())
console.log(listarObjetosDog())
console.log(listarNomesDeDogs())

console.log(`--------`)

listarNomesDeDogs()

const nomesDeDogs = listarNomesDeDogs()
