console.clear();
// op = output
let _array = [1,2,3,4];

console.log(_array.length);
console.log(Array.isArray(_array)); // Valida que sea un array, op: true

/* Extraer elementos a un array */

console.log(_array.shift()); // elimina el primero elmento y lo devuelve, op: 1
console.log(_array); // op: [2,3,4]
console.log(_array.pop()); // elimina el ultimo elemtento y lo devuelve, op: 4
console.log(_array); // op: [2,3]

/* Insertar elementos a un array
 * push - Inserta uno-varios elementos al final y retorna la nueva longitud del array */
console.log(_array.push(5)); // op: 3
console.log(_array); // op: [2,3,5]
console.log(_array.push(8,9,11)); // op: 6
console.log(_array); // op: [2,3,5,8,9,11]
 
 /* unshift - Inserta uno-varios elementos al inicio y retorna la nueva longitud del array */
console.log(_array.unshift(0)); // op: 7
console.log(_array); // op: [0,2,3,5,8,9,11]
console.log(_array.unshift(-3,-2,-1)); // op: 10
console.log(_array); // op: [-3,-2,-1,0,2,3,5,8,9,11]

/* Buscar */
// retorna -1 si no encuentran coincidencias
console.log(_array.indexOf(5)); // Devuelve el indice de la primera coincidencia
console.log(_array.lastIndexOf(6)); // Devuelve el indice de la ultima coincidencia

/* otros metodos */
console.log(_array.reverse()); // le da la vuelta al array (mutacion permanente)
console.log(_array.join()); // convierte a string, (mutacion no permanente)
console.log(_array); // le da la vuelta al array
console.log(_array.reverse()); // le da la vuelta al array (mutacion permanente)

/*splice
	(a,b,items) - cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
	a - Indice de inicio
	b - Numero de elementos (opcional)
	items - elementos a añadir en caso de que se deba añadir (opcional)
*/

// current array [-3,-2,-1,0,2,3,5,8,9,11]
console.log(_array.splice(2)); // op: [-1,0,2,3,5,8,9,11]
console.log(_array);
