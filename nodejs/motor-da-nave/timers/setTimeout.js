const timeOut = 3000
const fineshed = () => cosolog.log('done!')

//chama e registra a função / tempo para ser executada
let timer = setTimeout(fineshed, timeOut) 
// clearTimeout(timer) // cancela o setTimeout