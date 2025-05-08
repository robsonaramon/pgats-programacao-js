//1 - Crie uma função que pega uma lista de inteiros e strings e retorna uma nova lista sem as strings.

const inteirosStrings = [25, 'casa', 13, 'nome', 14, 'bolacha', 'salada', '12', '27', 44]
function retornarListaSemStrings (lista){
    return lista.filter(elemento => typeof elemento === "number")
}

console.log(retornarListaSemStrings(inteirosStrings))