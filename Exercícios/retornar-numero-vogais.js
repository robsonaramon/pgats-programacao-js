//Retorne o número de vogais no texto fornecido. Consideraremos a, e, i, o e u como vogais para este Kata. O texto de entrada conterá apenas letras minúsculas e/ou espaços. Letras acentuadas não fazem parte desse desafio.

const texto = 'o rato roeu a roupa do rei de roma'

function contarNumeroVogais(texto){
    const vogais = texto.split("").filter(letra => letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u').length
    return vogais
}

console.log(contarNumeroVogais(texto))