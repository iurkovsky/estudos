/*
const a = { name: 'teste'} // a variavel A nao possui o conteudo que esta dentro do objeto, ela só tem o endereço da qual o objeto esta localizado
console.log(a)
const b = a
console.log(b)
b.name = 'opa'
console.log(b)
console.log(a)
// ou seja, b recebeu a, porem nenhum valor foi atribuida a eles, como eles compartilham o mesmo endereço, entao, se b recebe a e depois eu mudo o "objeto" do b, o a tambem receberá
// o que foi atribuido ao B, pois, eles compartilham do mesmo endereço..




let c = 3
let d = c
d++
console.log(c)
console.log(d)
// aqui os valores são atribuidos diretamente a eles, uma cópia por valor, mas ambos tem os seus valores definidos e independentes!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/


let valor // nao inicializado
console.log(valor)
valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString())  erro

const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)

