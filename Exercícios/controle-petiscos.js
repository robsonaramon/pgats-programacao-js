/*Crie um script que receba uma quantidade de petiscos e dê 1 por vez até o dog estiver satisfeito.

Use a estrutura de repetição for contado.

Exiba:
Cada vez que um petisco for entregue
Quando o dog estiver satisfeito (que é quando terminar os petiscos)

Extra: transforme a lógica em uma função (da forma que conseguir)*/

function controlarQuantidadePetiscos(quantidadePetiscosDisponiveis){
    for (let petisco = 1; petisco <= quantidadePetiscosDisponiveis; petisco++ ){
        console.log(`Dando o petisco nº ${petisco}`)
    }

    console.log(`Pepi está satisfeita`)
}

controlarQuantidadePetiscos(10)