
function getScore(score) {
    let scoreA = score >= 90 && score <= 100 //A
    let scoreB = score >= 80 && score <= 89  //B
    let scoreC = score >= 70 && score <= 79  //C
    let scoreD = score >= 60 && score <= 69  //D
    let scoreE = score < 60 && score >= 0    //F

    let scoreFinal;

    if(scoreA) {
        scoreFinal = 'A'
    } else if(scoreB) {
        scoreFinal = 'B'
    } else if(scoreC) {
        scoreFinal = "C"
    } else if(scoreD) {
        scoreFinal = "D"
    } else if(scoreE) {
        scoreFinal = "E"
    } else {
        scoreFinal = "Nota invalida"
    }

    return scoreFinal;
}

console.log(getScore(93))
console.log(getScore(-93))
console.log(getScore(60))
console.log(getScore(75))