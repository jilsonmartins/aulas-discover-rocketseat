// Eventos

// mouse
function print() {
    console.log('Hello!!!!')
}

// teclado
const input = document.querySelector('input')
input.onkeydown = function() {
    console.log('Hello!')
}

// JS
const h2 = document.querySelector('h2')

// addEventListener empilha todas as funções e executa todas
h2.addEventListener('click', print) // add um evento e chamando a função

function print() {
    console.log('print')
}