// throw

function sayMyName(name = '') {
    if(name === '') {
        throw 'Nome é obrigatório'
    }

    console.log(name)
}

// try...catch
try{
    sayMyName("junior")
} catch(error) {
    console.log(error)
}

console.log('após o try/catch')