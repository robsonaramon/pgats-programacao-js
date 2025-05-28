try {
    console.log(`Tentando alimentar o cachorro`)
    throw new Error('Não quis se alimentar')    
} catch (execao) {
    console.log(execao)
    console.log(execao.name)
    console.log(execao.message)
} finally {
    console.log(`Sempre serei executado`)
}