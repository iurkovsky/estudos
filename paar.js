//par nome/valor
const saudacao = 'opa' // contexto léxico 1
function exec(){
    const saudacao = 'falaaaaa' // contexto léxico 2
    return saudacao

}
// objetos sao grupos aninhados de pares nome/valor
const cliente = {
nome: 'pedro',
idade: 32,
peso: 100,
endereço: {
        logradouro: 'rua do nunca',
        numero: 2321
}
}
console.log(saudacao)
console.log(exec())
console.log(cliente)
