/*Calculadora de ração diária
Crie um script que receba o peso do dog em kg + estoque atual de ração em gramas. Calcule a quantidade diária de ração com base na seguinte fórmula: Gramas por dia = peso × 30
Exiba:
Nome do dog
Peso
Quantidade de ração recomendada por dia
Quantos dias o estoque atual vai durar*/

// Meu código
const nome = 'Cebola'
const peso = 7
const estoqueRacao = 20
const quantidadeDiariaRacao = peso*30
const diasDeEstoqueRacao = Math.floor((estoqueRacao*1000)/quantidadeDiariaRacao)

console.log(`Nome: ${nome}`)
console.log(`Peso: ${peso}kg`)
console.log(`Quantidade diária de ração: ${quantidadeDiariaRacao}g`)
console.log(`Quantidade de dias de estoque de ração: ${diasDeEstoqueRacao} dias`)


//Alternativa com função
function calcularConsumoRacao(nome, peso, estoqueRacao){
    const quantidadeDiariaRacao = peso*30
    const diasDeEstoqueRacao = Math.floor((estoqueRacao*1000)/quantidadeDiariaRacao)
    console.log(`---------------------`)
    console.log(`Nome: ${nome}`)
    console.log(`Peso: ${peso}kg`)
    console.log(`Quantidade diária de ração: ${quantidadeDiariaRacao}g`)
    console.log(`Quantidade de dias de estoque de ração: ${diasDeEstoqueRacao} dias`)
    console.log(`---------------------`)
}
calcularConsumoRacao('Lila', 4, 14)
calcularConsumoRacao('Ruki', 14.4, 20)