//01
//let weight;

//02
console.log(typeof weight)

//03
let name = 'Junior'
let age = 28
let weight = 85.5
let isSubscribed = true

//04
    //4.2
    let student = {
        name:'Junior',
        age: 28,
        weight: 85.5,
        isSubscribed: true,
    }
    //4.1
    console.log(typeof student)
    //4.3
    console.log(`${student.name} de idade ${student.age} pesa ${student.weight} Kg.`)

//05
let students = [];

//06
students = [
    student
]
console.log(students)

//07
console.log(students[0])

//08
const john = {
    name: "John",
    age: 28,
    weight: 74.8,
    isSubscribed: true,
}
students[1] = john
console.log(students)

// 09 - hoisting(elevação)
console.log(a)
var a = 1;