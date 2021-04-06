//Estrutura for...in : pega as propriedades do objeto

let person = {
    name: 'junior',
    age: 28,
    weight: 85
}

for(let property in person) {
    console.log(property)
   // console.log(person.name)
}