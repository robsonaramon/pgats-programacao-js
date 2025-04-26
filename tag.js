const nome = 'Pepi', raca = 'sdr'
let idade = 4, peso = 12.3, adotado = true

let nomeUpperCarse = nome.toUpperCase()
let racaFirstletter = raca.charAt(0).toUpperCase() + raca.slice(1).toLowerCase()

const tag = [{
    Nome: nomeUpperCarse,
    Peso: peso,
    Raça: racaFirstletter
}]
console.log(tag)

console.log(`Nome: ${nome.toUpperCase()}, Peso: ${peso}, Raça: ${raca.slice(0, 1).toUpperCase() + raca.slice(1).toLowerCase()}`)