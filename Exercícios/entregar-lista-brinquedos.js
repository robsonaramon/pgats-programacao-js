import {BRINQUEDOS} from './lista-brinquedos.js'

function entregarBrinquedos(listaBrinquedos){
    listaBrinquedos.forEach(brinquedo => {
        console.log(`Entregando o ${brinquedo} para o cachorro brincar`)
    })
}

entregarBrinquedos(BRINQUEDOS)