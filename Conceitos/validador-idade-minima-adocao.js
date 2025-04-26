/*
Validador de idade mínima para adoção

Crie um script que verifique se um dog pode ser adotado com base na idade mínima definida, por exemplo, 2 anos.
Use os operadores adequados e exiba:
Nome do dog
Idade
Se está apto ou não para adoção

Extra: aplique uma regra com operador lógico para permitir que se o cão for de pequeno porte, pode ser adotado independente da idade
*/

/*
Meu código

let nomeCachorro = "Cebola"
let idade = 1
const porteCachorro = 'M'
let podeSerAdotado = idade >= 2 ? 'sim' : 'não'

podeSerAdotado = porteCachorro === 'P' ? 'sim' : 'não'

console.log(`Nome do cachorro: ${nomeCachorro}`)
console.log(`Idade do cachorro: ${idade}`)
console.log(`Pode ser adotado: ${podeSerAdotado}`)*/

let nome =  'Cebola'
let idade = 1
const porte = 'P'
const idadeMinima = 2

function podeSerAdotado(idade, porte) {
    const adocao = idade >= idadeMinima
                ?'sim'
                :porte === 'P'
                ? 'sim'
                : 'não'

    console.log(adocao)
}

podeSerAdotado(1, 'M')
podeSerAdotado(2, 'M')
podeSerAdotado(2, 'P')
podeSerAdotado(1, 'P')