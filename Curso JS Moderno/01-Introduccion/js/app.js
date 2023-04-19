// pregunta al usuario su nombre y lo proyecta en la web 
const nombre = prompt('Cual es tu nombre?');
document.querySelector('.contenido').innerHTML = `${nombre} Esta aprendiendo JavaScript Moderno`;