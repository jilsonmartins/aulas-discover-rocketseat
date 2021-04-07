// transformDegree(50F)
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    // fluxo de erro
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('grau não identificado')
    }

    // fluxo ideal, F -> C
    let updateDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    // fluxo alternativo
    if(celsiusExists) {
        updateDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula(updateDegree) +`º`+degreeSign
}

try {
    console.log(transformDegree('10C'))
    console.log(transformDegree('50F'))
    transformDegree('50B')
} catch (error) {
    console.log(error.message)
}