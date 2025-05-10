/*Contador de satisfação de passeio

Crie um script que avise quando o Dog já passeou o suficiente. Para saber, vamos considerar que ele se sentirá satisfeito somente a partir de 5 voltas na quadra.

Use a estrutura de repetição while.

Exiba:
Qual o número da volta atual
Quando o dog estiver satisfeito

Extra: transforme a lógica em uma função (da forma que conseguir)*/

const voltasParaFicarSatisfeito = 5
let numeroDeVoltas = 1

function verificarSeEstaSatisfeito(){
        while (numeroDeVoltas <= voltasParaFicarSatisfeito){
            if(numeroDeVoltas !== 5){
                console.log(`Volta nº ${numeroDeVoltas}. Ainda não está satisfeito.`)
            }else {
                console.log(`Cachorro está satisfeito`)
            }
            numeroDeVoltas++
    }
}

verificarSeEstaSatisfeito()

/*Professor
function levarCachorroParaPassear(){
    while (numeroDeVoltas <= voltasParaFicarSatisfeito){    
        console.log(`Volta nº ${numeroDeVoltas}`)
        
        numeroDeVoltas++
    }
    console.log(`Cachorro está satisfeito`)
}*/