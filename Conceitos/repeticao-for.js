const quantidadeCalculada = 3

for (let quantidadePetiscos = 1; quantidadePetiscos <= quantidadeCalculada; quantidadePetiscos++){
    console.log(`Dando o petisco de nº ${quantidadePetiscos}`)
}

console.log('-------------------------')
for (let quantidadePetiscos = 1; quantidadePetiscos <= quantidadeCalculada; quantidadePetiscos++){
    const gatos = ['Lessie', 'Pony', 'Fumaça']
    console.log(`Dando o petisco de nº ${quantidadePetiscos}`)
    
    for (let indice = 0; indice < gatos.length; indice++){
        console.log(`Dando o petisco para ${gatos[indice]}`)
    }
    
}