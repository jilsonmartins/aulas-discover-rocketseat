/**
 * Manipulando Strings e Números
 */

// transformando string em número e número em string
let string = "123"
let number = 321

console.log(Number(string)) // conversão p/ número
console.log(String(number)) // conversão p/ string

// Contar quantidade caracteres
let word = "Paralelepipedo"
console.log(word.length)

let numero = 1234
console.log(String(numero).length)

// Transformando um número quebrado com 2 casa decimais e trocar por ponto e vírgula
/**
 * replace: altera um valor por outro
 * toFixed: altera um numero de casas decimais
 * OBS: quando se usa o replace o dado vira uma string, pelo fato de não haver "," no dado do tipo number. atentar para isso.
 */
let valor = 354.896756
console.log(valor.toFixed(2).replace(".", ","))
