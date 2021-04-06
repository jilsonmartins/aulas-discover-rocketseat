// if... else
// OBS: Criar variaveis e atribuir as condições
// if e else aceitam falsy e truthy

let temperatura = 38;
let altaTemperatura = temperatura >= 37.5
let mediaTemperatura = temperatura < 37.5 && temperatura >= 37

if(altaTemperatura){
    console.log("Febre")
} else if(mediaTemperatura) {
    console.log("Febre moderada")
} else {
    console.log("Saudável")
}