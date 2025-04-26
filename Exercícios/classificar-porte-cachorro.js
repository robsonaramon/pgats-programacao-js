/*Classificador de porte automático

Muitos tutores não fazem ideia do porte de seu Dog.
Crie um script que classifique o porte com base no peso de forma simplificada, sendo:

Até 10kg → Pequeno; acima disso → Médio

Use o operador ternário para determinar o porte. Exiba:
Nome
Peso
Porte classificado

Extra: transforme a lógica em uma função (da forma que conseguir)*/


function classificarPortePorPeso(nome, peso){
const porte = peso <= 10 ? 'Pequeno' : 'Médio'
console.log (`Nome: ${ nome }`)
console.log (`Peso: ${ peso }`)
console.log (`Porte: ${ porte }`)
console.log ('------------')
}

classificarPortePorPeso('Cebola', 5)
classificarPortePorPeso('Ruki', 14)
classificarPortePorPeso('Lila', 2)