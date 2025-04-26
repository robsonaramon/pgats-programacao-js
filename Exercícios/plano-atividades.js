/*Plano de atividades para o Pet

Crie um script que defina o plano de atividades para os dogs durante a estadia. O script vai receber o porte (pequeno, médio ou grande); e o tempo disponível para a atividade representado em minutos. Exemplo:

Pantera - Médio - 45

Use uma condicional para decidir o tipo de atividade com base no porte:

pequeno → brincar dentro de casa
médio → caminhada no quarteirão
grande → correr no parque
qualquer outro → porte inválido

Depois, uma condicional para ajustar a mensagem de acordo com o tempo:

menor que 15 → "atividade rápida: [atividade]"
de 15 a 30 → "tempo ideal: [atividade]"
acima de 30 → "hora da diversão: [atividade]"

*/
function escolherTipoAtividade(porte, tempo){
    let atividade

    switch(porte){
        case 'pequeno':
            atividade = 'Brincar dentro de casa'
            break
        case 'médio':
        case 'medio':
            atividade = 'Caminhada no quarteirão'
            break
        case 'grande':
            atividade = 'Correr no parque'
            break
        default:
            atividade = 'Porte inválido'
        }

    let mensagem
    if (tempo < 15){
        mensagem =  `Atividade rápida: [${atividade}]`
    } else if (tempo <= 30){
        mensagem =  `Tempo ideal: [${atividade}]`
    }else {
        mensagem =  `Hora da diversão:[${atividade}]`
    }

    console.log (`Porte ${porte}, ${tempo} min - ${mensagem}`)
    
}


escolherTipoAtividade('pequeno',14)
escolherTipoAtividade('médio',14)
escolherTipoAtividade('grande',14)
escolherTipoAtividade('gigante',14)
escolherTipoAtividade('pequeno',20)
escolherTipoAtividade('médio',20)
escolherTipoAtividade('grande',20)
escolherTipoAtividade('gigante',20)
escolherTipoAtividade('pequeno',35)
escolherTipoAtividade('médio',35)
escolherTipoAtividade('grande',35)
escolherTipoAtividade('gigante',35)