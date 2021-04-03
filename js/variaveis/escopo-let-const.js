/**
 * Let e Const: só funcionam no escopo em que foram criados
 */

let y = 0;

// Exemplo Let
{ // escopo global
    // Aqui cabe o conceito de hoisting (escopo local)
    let x = 10;
    console.log('existe x no bloco local', x)

    y = 2; // Sobe o escopo até achar o valor definido de y
}

// console.log('existe x depois do bloco global', x)

console.log('existe y depois do bloco global', y) // exibe o valor definido no bloco local (y = 2)

//======================================================================

// Exemplo Const
const w = 10;

{
    w = 20;
    console.log(w) // constante ñ é alterado valor. 
    // OBS: segue os mesmo conceitos de bloco do Let, porém não se pode alterar o valor.
}