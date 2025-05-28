function geradorDeTagsDeIdentificacao (nome){
    let nomeMaisculo 
    if (typeof nome === 'string'){
        nomeMaisculo = nome.toUpperCase()
        console.log (`O nome da tag é: ${nomeMaisculo}`)
        return (nomeMaisculo)
    } else {
        throw new Error(`O texto '${nome}' digitado não é válido`)
    }
}
function verificarSePodeSerAdotado (idade, porte){
    const dados = idade === 1 && porte === 'M'
    let podeAdotar
        if (dados) {
            podeAdotar = true
            console.log ('O pet atende os requisitos e pode ser adotado')
        } else { 
            podeAdotar = false
            console.log ('O pet não atende os requisitos e não pode ser adotado')
        }
    return (podeAdotar)
}
function calcularConsumoDeRacao (nome, idade, peso){
    const quantidadeDiariaRacao = peso*300
    console.log (`Nome: ${nome}`)
    console.log (`Idade: ${idade} ano(s)`)
    console.log (`Quantidade diária de ração: ${quantidadeDiariaRacao} gramas`)
    return (quantidadeDiariaRacao)
}
function decidirTipoDeAtividadePorPorte (porte){
    let atividade
    
    switch(porte){
        case 'pequeno':
            atividade = 'brincar dentro de casa'
            break
        case 'medio':
        case 'médio':
            atividade = 'brincar no quintal'
            break
        case 'grande':
            atividade = 'brincar no parque'
            break
        default: 
            atividade = 'porte inválido'
    }
    if ( atividade === 'porte inválido'){
        console.log (`Digite um porte correto.`)
    } else {
        console.log (`Porte: ${porte}, atividade adequada: ${atividade}`)
    }
    return (atividade)
}
async function buscarDadoAsync (){
    let nome = 'Pipoca'
    return (nome)
}

export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}