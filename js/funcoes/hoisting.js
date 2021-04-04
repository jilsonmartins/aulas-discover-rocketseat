// function hoisting
sayMyName()

// Quando se faz uma função em maneira de expressão ela não sofre elevação
/*
    const sayMyName = function () {
        console.log('Junior')
    }
*/

function sayMyName () {
    console.log('Junior')
}