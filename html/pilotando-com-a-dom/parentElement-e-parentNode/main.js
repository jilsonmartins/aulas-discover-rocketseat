// Navegando pelos elementos 

// parentNode parentElement
// childNodes children

const body = document.querySelector('body')
const element = document.querySelector('body')

console.log(body.parentElement) // elmento pai
console.log(body.parentNode) // no pai - nodelist

console.log(element.childNodes) // todos os filhos
console.log(element.children) // HTMLcollection - elimina os espaços de texto

// firstChild firstElementChild (primeiro filho)
console.log(element.firstChild) // leva em conta o espaço vazio
console.log(element.firstElementChild) // não leva em conta o espaço vazio

// lastChild lastElementChild (ultimo filho)
console.log(element.lastChild) // leva em conta o espaço vazio
console.log(element.lastElementChild) // não leva em conta o espaço vazio

// pegando elementos irmãos
// nextSibling  nextElementeSibling
console.log(element.nextSibling) // leva em conta o espaço vazio
console.log(element.nextElementSibling) // não leva em conta o espaço vazio

// nextSibling  nextElementeSibling
console.log(element.previousSibling) // leva em conta o espaço vazio
console.log(element.previousElementSibling) // não leva em conta o espaço vazio