// declaração ou declaration
var name;

// assignment ou atribuição de valores
name = "Junior";

// que tipo de dado foi colocado na variavel
console.log(typeof name)

let age = 28;
let isHuman = true;

console.log(typeof isHuman, typeof age)

// interpolando valores com tempalte literals ou template strings
console.log(`O ${name} tem ${age} anos.`)

//=======================================================================
// Object
const person = {
    name: 'Junior',
    age: 28,
    weight: 85,
    isAdmin: true
}

console.log(`${person.name} tem ${person.age} anos.`)

//=======================================================================
// Array
const animals = [
    'Lion',
    'Monkey',
    'Cat',
    dog = {
        name: 'Nikky',
        age: 6
    }
]

console.log(animals[1]) // acessar valores
console.log(animals.length) // tamanho do array

console.log(animals[3].name, animals[3].age)
console.log(animals[3])
