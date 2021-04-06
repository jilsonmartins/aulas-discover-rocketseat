// switch

function calculadora(numero1, operador, numero2){
    let result

    switch (operador) {
        case '+':
            result = numero1 + numero2
            break
        
        case '-':
            result = numero1 - numero2
            break
    
        case '*':
            result = numero1 * numero2
            break
    
        case '/':
            result = numero1 / numero2
            break
    
        default:
            console.log("não implementado")
            break
    }

    return result
}

console.log(calculadora(4, '+', 8))
console.log(calculadora(4, '-', 8))
console.log(calculadora(4, '*', 8))
console.log(calculadora(4, '/', 8))