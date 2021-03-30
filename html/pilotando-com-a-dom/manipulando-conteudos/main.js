/*
 Manipulando conteúdo
*/

// #textContent 

const element = document.querySelector('h1');

/* 
element.textContent = "Hello devs" // altera o conteúdo
console.log(element.textContent)
*/ 
// element.textContent += " Hello devs " // concatena o que contém dentro de h1 + "Hello devs"


// innerText
// element.innerText += " Hello World " // altera o coteúdo interno

// innerHTML
// element.innerHTML += " Hellor World <small>!!!</small>" // altera o coteúdo interno e aceita tags HTML.

// value
/*
const element2 = document.querySelector('input')

console.log(element2.value) // retorna o valor do input
element2.value = "Outro valor" // altera o valor do input

*/

const header = document.querySelector('header')

header.setAttribute('id', 'header') // adiciona um atributo do tipo id chamado header

const headerID = document.querySelector('#header') // cria uma cosntante e pega o id do tipo header

// console.log(headerID)
console.log(headerID.getAttribute('id')) // busca um atributo do tipo id

header.removeAttribute('id') // remove o atributo do tipo id

header.setAttribute('class', 'bg header') // adiciona mais uma classe bg header