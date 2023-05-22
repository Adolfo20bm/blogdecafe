// querySelector // Puedes seleccionar el id con #
const heading = document.querySelector('.header__texto h2'); // 0 o 1 Elementos
heading.textContent = 'MODIFICADOOOOOOO';
console.log(heading);

// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces[0]);

enlaces[0].textContent = 'MODIFICADODODO';
enlaces[0].href = 'http://google.com';
enlaces[0].classList.add('nueva-clase');
enlaces[0].classList.remove('navegacion_enlace');

//getElementById

const heading2 = document.getElementById('heading');
console.log(heading2);

// Generar un nuevo enlace
const nuevoEnlace = document.createElement('A');
console.log(nuevoEnlace);

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual';

// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

//Agregarlo al Documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

// Eventos

console.log(1);

window.addEventListener('load', function() { // load espera a que el JS y los archivos que dependen del HTML este listos
    console.log(2);
});

window.onload = function() {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){
    console.log(4);
});

console.log(5);

//window.onscroll = function(){
//    console.log('scrolling...');
//}

// Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario');
//btnEnviar.addEventListener('click', function(evento){
//    console.log(evento);
//    evento.preventDefault();
    // Validar un formulario
//    console.log('enviando formulario');
//});

// Eventos de los inputs y Textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
// En caso de formulario debes utilizar submit y no click
// El Evento de Submit
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    // Validar el formulario
    const {nombre, email, mensaje} = datos;
    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios',true);

        return; // Corta la ejecucion del codigo
    }
    
    // Crear la alerta de Enviar correctamente
        mostrarAlerta('Mensaje enviado correctamente');
});

function leerTexto(e){
    // console.log(e.target.value);
    datos[e.target.id]=e.target.value;
    // console.log(datos);
}

function mostrarAlerta(mensaje,error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if(error){
        alerta.classList.add('error');
    } else {
        alerta.classList.add('envio');
    }
    formulario.appendChild(alerta);
    // Desaparece despues de 5 segundos
    setTimeout(()=> {
        alerta.remove();
    },3000);
}