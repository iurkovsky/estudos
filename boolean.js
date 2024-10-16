let isAtivo = false
console.log(isAtivo)
isAtivo = true
console.log(isAtivo)
isAtivo = 1
console.log(!isAtivo)
// Todos os testes serão verdadeiros utilizando !!
console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!'')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
// Todos os testes serão falsos utilizando !

console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
let nome = ''

console.log(nome || 'desconhecido' )
//ex2
 let noome = 'lucas'

console.log(noome || 'desconhecido' )