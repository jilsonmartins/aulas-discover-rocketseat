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

// transformando letra minuscula para maiuscula
let texto = "programar é muito legal"
console.log(texto.toUpperCase())

// transformando letra maiuscula para minuscula
let texto2 = "PROGRAMAR É MUITO LEGAL"
console.log(texto2.toLowerCase())

// verificar se um texto contem uma palavra
let phrase = "Eu quero viver o Amor"
console.log(phrase.includes("Amor")) // o metodo includes() verifica se contem a palavra

// separação de texto - split()
// junção de texto - join()
let myArray = phrase.split(" ")
console.log(myArray)

let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)

// criação de uma array co construtor
let myArray2 = new Array('a', 'b', 'c')
console.log(myArray2)

// contando elementos do array
let frutas = [
    "banana",
    "maçã",
    "goiaba",
    "uva",
]

console.log(frutas.length) // tamanho
console.log(typeof(frutas)) // tipo

// transformando uma cadeia de caracteres em array
let teste = "renascer"
console.log(Array.from(teste)) // transforma em array


// MANIPULANDO ARRAYS
let techs = ["html", "css", "js"]
//adicionando no fim do array
techs.push("nodejs")
//adicionando no começo do array
techs.unshift("sql")
//removendo do fim do array
techs.pop()
//removendo do começo do array
techs.shift()

// pegar somente alguns elementos do array
console.log(techs.slice(1, 3)) // slice( de onde, até onde - posição do elemento) remove o elemento na exibição, porém na mexer na estrutura do array. OBS: se quiser pegar todo o array deve  colocar o tamanho total do array

// remover 1 ou mais items em qualquer posição do array
console.log(splice(1, 2)) // splice(de onde, quantos - posição do elemento) remove o elemento na estrutura do array

// encontrar a posição de um elemento no array
let index = techs.indexOf('css') // mostra a posição do array
techs.splice(index, 1) // remove o elemento da posição
console.log(index)


console.log(techs)