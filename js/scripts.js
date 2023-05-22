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
