/**
 * No escopo de função variavel fica isolada (var, let, const), ou seja, ñ existirá no escopo global. a não ser que crie uma variavel sem a palavra chave (var, let, const)
 */
// function expression
// function anonymous

// parâmetros (parameters) -> função criada
const sum = function(number1, number2) {
    //console.log(number1 + number2);
    return number1 + number2;
}

//sum(2, 3) // arguments - argumentos -> função executada

console.log(sum(2, 3))