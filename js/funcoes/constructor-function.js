/**
 * Function() constructor
 * expressão new
 * criar um novo objeto
 * this keybord
 */

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const junior = new Person("Junior") // cria um objeto do tipo Person / instanciar
console.log(junior.name)
console.log(junior.walk())
