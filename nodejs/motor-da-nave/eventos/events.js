const { EvevtEmitter } = require('events') // do tipo classe 
const ev = new EvevtEmitter()

ev.on('saySomething', (message) => { // aqui está ouvindo o evento. P/ ouvir sempre
    console.log('Eu ouvir você: ', message)
})

/**
 ev.once('saySomething', (message) => { // aqui está ouvindo o evento. P/ ouvir uma única vez
    console.log('Eu ouvir você: ', message)
})
 */

ev.emit('saySomething', "Júnior") // aqui emite/dispara o evento