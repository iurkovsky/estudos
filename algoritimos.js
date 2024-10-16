/* Algoritimos nada mais é que a sequencia de passos. Ex:
* um gerente tem uma pilha de documentos para assinar, ele assina um e volta na pilha pra ver se tem mais,
* até o momento dele observar que a pilha acabou ai sim ele pode partir para a proxima tarefa

*/

//Voce pode mandar o algoritimo repetir quantas vezes quiser.
const imprimirResultado = function(nota)
  if(nota > 6) {
    console.log("aprovado!");
  } else {
    console.log("reprovado");
  }
        
 
imprimirResultado(8)