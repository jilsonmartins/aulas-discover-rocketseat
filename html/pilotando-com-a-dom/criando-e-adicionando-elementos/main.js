// Craindo e adicionando elementos

// createElement
const div = document.querySelector('div')
div.innerText = "Hello World!"

// append prepend
const body = document.querySelector('body')
// ultimo filho
body.append(div)

// primeiro filho
body.prepend(div)

// insertBefore
const script = body.querySelector('sript')
body.insertBefore(div, script)

// simulando um afterBefore
const header = body.querySelector('header')
body.insertBefore(div, header.nextSibling)

