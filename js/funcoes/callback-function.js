// callback function
// callback  - chamar de volta

function sayMyName(name) {
    name()
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)