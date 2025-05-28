import {CACHORROS} from './lista-cachorros.js'

function distribuirPedisco(listaCachorros){
    listaCachorros.forEach(cachorro => {
        console.log(`Entregando petisco para ${cachorro}`)
    });
}

distribuirPedisco(CACHORROS)