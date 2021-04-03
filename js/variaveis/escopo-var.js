/**
 * Hoisting: Elevar, quando var é elevado ao topo do escopo global, independente de qual escopo foi definido.
 */

// escopo global
console.log("Existe a variavel X", x) // nesta linha existe devivo o conceito hoisting, porém não está definida.

{ // escopo local
    var x = 0;
}

console.log("Existe a variavel X", x) // existe e está definida