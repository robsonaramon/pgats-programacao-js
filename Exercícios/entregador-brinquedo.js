/*Entregador de brinquedos para os dogs

Dado que você tenha uma lista de brinquedos com: 
Crie um script que passe pela lista de brinquedos e entregue um por vez.
Exiba o nome de cada brinquedo que for entregue.

Use a estrutura de repetição forEach.

Extra: transforme a lógica em uma função (da forma que conseguir)*/

function entregarBrinquedo(){
    const brinquedos = ['Bola', 'Osso', 'Corda', 'Sino']

    brinquedos.forEach(brinquedo => {
        console.log(`Entregando ${brinquedo} para a Pepi brincar`)
    });
}

entregarBrinquedo()