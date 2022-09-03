import * as dom_events from "./events.js";

/*
	document.getElementById('Id'); Obtiene el elemento con dicho id
	element | document.querySelector('clase css o tag html o compuesto'); Accede al primer elemento que coincida con los parametros dados
	document.querySelectorAll('clase css o tag html o compuesto'); Accede a todos los elementos que coincida con los parametros dados
																																	devuelve un node list
*/

/////////////////////// getElemntById
const title = document.getElementById('title');
// title.textContent = 'DOM Accediendo a nodos'; // textContent - lectura y escritura(=)

/////////////////////// querySelector
// Ejemplo con document
// const paragraph = document.querySelector('.paragraph');
// Extrae el elemento con dicha clase, seleccionando como hijo en base a la posicion indicada
// const paragraph = document.querySelector('.paragraph:nth-child(3)'); // el conteo empieza en 1
// console.log(paragraph);

//Ejemplo con element
// const paragraph = document.querySelector('.paragraph');
// const span = paragraph.querySelector('span');
// console.log(span);

/////////////////////// querySelectorAll
// Retorna un node list
// const paragraphs = document.querySelectorAll('.paragraph');
// const paragraphsAsArray = [...document.querySelectorAll('.paragraph')]; // puede tener incompatibilidad con algunos navegadores
// const paragraphsAsArray = Array.from(document.querySelectorAll('.paragraph')); // mejor forma actual
// paragraphs[0].style.color = 'red';

/*
	Atributos de un elemento html
*/

/// getAttribute('attribute');
const txt_name = document.getElementById('txt_name');
// console.log(txt_name.getAttribute('type')); // text

/// setAttribute('attribute','new val');
txt_name.setAttribute('type','number');

// element.classList.add(class, class, ....);
title.classList.add('main-title', 'other-title');

// element.classList.remove(class, class, ....);
title.classList.remove('other-title'); // si se intenta borrar una clase que no tiene no pasa nada

// element.classList.contains(class); // Valida que la clase exista
console.log(title.classList.contains('main-title')); // true

// element.classList.replace('old-class', 'new-class');
title.classList.replace('main-title', 'replaced-title');
