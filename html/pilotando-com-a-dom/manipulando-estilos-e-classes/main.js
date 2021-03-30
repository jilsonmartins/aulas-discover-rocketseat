// Alterando estilos
// style
const element = document.querySelector('body')

//element.style.backgroundColor = "#f9f3D2" // seta a cor de fundo
//console.log(element.style.backgroundColor) // busca a cor de fundo

//classlist
element.classList.add('active', 'green') // ativa o background-color
console.log(element.classList) // busca o background-color

element.classList.remove('active') // remove o background-color
element.classList.toggle('active')