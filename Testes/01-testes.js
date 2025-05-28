/*
    describe -> abrupador de testes
    it -> implementação do teste
*/
import {} from '../Conceitos/exibirNomeFormatado.js'
import assert from 'node:assert'

describe('Testes do projeto', () => {

    it('Deve exibir o nome do cachorro com letras maiúsculas', () => {
        assert.strictEqual(exibirNomeFormatado('Pepi'), 'PEPI')
    })
})