// function escope
let subject = 'create video' // escopo global

function createThink(subject) { // é necessario o parametro para que o escopo global ñ seja sobreposto pelo de função (subject).
    subject = 'study' // escopo de função
    return subject
}


console.log(createThink(subject)) // escopo de função

// se o escopo global estiver definido com valores ele não é sobreposto
// neste caso o escopo global ñ é sobreposto pelo de função.
console.log(subject) // escopo global

//=================================================================================================================================

let title;

function createTitle() {
    title = 'qualquer texto'
    return title
}

console.log(createTitle(title)) // escopo de função
console.log(title) // escopo global

//=================================================================================================================================

let title2;

function createTitle2() { // é necessario o parametro para que o escopo global ñ seja sobreposto pelo de função (title2).
    title2 = 'qualquer texto 2'
    return title2
}

console.log(createTitle2(title2)) // escopo de função

// neste caso o escopo global foi sobreposto pelo de função
console.log(title2) // escopo global