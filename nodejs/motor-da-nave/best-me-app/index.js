const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido hoje? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask = (index = 0) => {
    process.stdout.write("\n" + questions[index] + " > ")
}

ask()

const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim()) // pegando os dados transformando em strings e tirando os espaços vazios

    if (answers.length < questions.length) {
        ask(answers.length) // chama o ask e guarda a posição do array
    } else {
        process.exit() // termina o processo
    }
})

process.on('exit', () => {
    console.log(`
    Bacana Júnior!

    O que você aprendeu hoje foi:
    ${answers[0]}

    O que te aborreceu e você poderia melhorar foi:
    ${answers[1]}

    O que te deixou feliz hoje:
    ${answers[2]}

    Você ajudou ${answers[3]} pessoas hoje!

    Volte amanhã para novas reflexões!!
    `)
})