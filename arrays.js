/*
	console.clear();
	// op = output
	let _array = [1,2,3,4];
	
	console.log(_array.length);
	console.log(Array.isArray(_array)); // Valida que sea un array, op: true
	
	/ Extraer elementos a un array /
	
	console.log(_array.shift()); // elimina el primero elmento y lo devuelve, op: 1
	console.log(_array); // op: [2,3,4]
	console.log(_array.pop()); // elimina el ultimo elemtento y lo devuelve, op: 4
	console.log(_array); // op: [2,3]
	
	/ Insertar elementos a un array
	 push - Inserta uno-varios elementos al final y retorna la nueva longitud del array /
	console.log(_array.push(5)); // op: 3
	console.log(_array); // op: [2,3,5]
	console.log(_array.push(8,9,11)); // op: 6
	console.log(_array); // op: [2,3,5,8,9,11]
	 
	 / unshift - Inserta uno-varios elementos al inicio y retorna la nueva longitud del array /
	console.log(_array.unshift(0)); // op: 7
	console.log(_array); // op: [0,2,3,5,8,9,11]
	/ console.log(_array.unshift(-3,-2,-1)); // op: 10
	console.log(_array); // op: [-3,-2,-1,0,2,3,5,8,9,11]

	/ Buscar /
	// retorna -1 si no encuentran coincidencias
	console.log(_array.indexOf(5)); // Devuelve el indice de la primera coincidencia
	console.log(_array.lastIndexOf(6)); // Devuelve el indice de la ultima coincidencia
	
	/ otros metodos /
	console.log(_array.reverse()); // le da la vuelta al array (mutacion permanente)
	console.log(_array.join()); // convierte a string, (mutacion no permanente)
	console.log(_array); // le da la vuelta al array
	console.log(_array.reverse()); // le da la vuelta al array (mutacion permanente)
	
	/splice (mutacion permanente)
		(a,b,items) - cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
		a - Indice de inicio
		b - Numero de elementos (opcional)
		items - elementos a añadir en caso de que se deba añadir (opcional)
		- si b vale 0 agrega los elemmentos a partir de la posicioon a y no elimina ninguno
	/
	
	// current array [-3,-2,-1,0,2,3,5,8,9,11]
	console.log(_array.splice(2)); // op: [-1,0,2,3,5,8,9,11]
	console.log(_array); // op: [-3,-2]
	
	let _array_2 = [1,2,3,4,5,6,7,8,9]
	console.log(_array_2.splice(6,2,10,11,12)); // op: [7,8]
	console.log(_array_2); // op: [1,2,3,4,5,6,10,11,12,9]
	
	/ slice(a,b) (mutacion no permanente)
		extrae los elementos desde el indice a hasta b
			- si b no existe lo extrae hasta el final, 
			- si a y b no existen hace una copia hasta el completa
	/
	
	let _array_3 = _array_2.slice();
	console.log(_array_3);
	console.log(_array_3.slice(4,7)); // op: 5,6, 10
	console.log(_array_3);	
*/

// Array.from convierte un objecto en un array

let string = "Hola mundo";

// Array.from(string).forEach( e =>{
// console.log(e);
// });

// Sort, ordena en base al codigo unicode de los elementos
let letters = ['x','a','g','z','u','b'];
letters.sort();
// console.log(letters); [ 'a', 'b', 'g', 'u', 'x', 'z' ]

// Al ordenar numeros se debe de especificar el elgoritimo en el callback, caso contrario los ordenara
// como si fuera texto

let numbers = [7,5,1,0,10,3,20,2,4,8,5,15];
numbers.sort();
// console.log(numbers); [0,1,10,15,2,20,3,4,5,5,7,8]

// Orden ascendente
numbers.sort((a,b) => a-b); // resta a - b y en base al resultado determina si a es mayor, menor o igual para asi ordenar
// console.log(numbers); // [0,1,2,3,4,5,5,7,8,10,15,20]

// Orden descendente
numbers.sort((a,b) => b-a); // resta b - a y en base a ello determina si b es 'mayor, ....'
// console.log(numbers); // [20,15,10,8,7,5,5,4,3,2,1,0]

// array.forEach
// numbers.forEach( (e, index) => console.log(index, e));

// some, comprueba si algunos de los elementos del array cumple la condicion
// console.log(numbers.some(e => e > 8)); true

// every, comprueba si todos los elementos del array cumple la condicion
// console.log(numbers.every(e => e > 8)); false

// Map recorre un array y devuelve uno nuevo, dentro del callback especificas las acciones que quieres llevar a cabo
let second_numbers = numbers.map( e => e * 2);
// console.log(second_numbers); // [40,30,20,16,14,10,8,6,4,2,0]

// Filter Filtra los elementos del array que cumplan con una condicion y en devuelve un nuevo array
let third_numbers = numbers.filter( e => e > 5); // Array original: [20,15,10,8,7,5,5,4,3,2,1,0]
// console.log(third_numbers); // [20,15,10,8,7]

// Reduce, el parametro de su callback funciona en pares, devuelve un unico valor, la operacion puede ser cualquiera
// console.log(numbers.reduce( (a,b) => a + b )); // 80 (la suma de todos los numeros)
// ex 2 
const users = [
	{name: 'will', online: true}, 
	{name: 'user2', online: false}, 
	{name: 'user3', online: true}, 
	{name: 'user4', online: true},
	{name: 'user4', online: false}
]
// array.reduce(callback,valor inicial del argumento count);
const usersOnline = users.reduce( (count, user) => {
	if(user.online) count++
	return count;
}, 0);

// console.log(`Hay ${usersOnline} usuarios conectados`);

// spread operator, operador de expancion
// console.log(numbers); // [20,15,10,8,7,5,5,4,3,2,1,0]
// console.log(...numbers); // 20 15 10 8 7 5 5 4 3 2 1 0 (sin [] ni ,)

// Casos de uso:
// Enviar parametros a una funcion

const addNumbers = (a,b,c) => console.log(a+b+c);
const numbersToAdd = [1,2,3];
// addNumbers(...numbersToAdd); // 6

// Añadir un array a otro array

let letters_a = ['a','b','c'];
let letters_b = ['d','e','f'];
// letters_a.push(...letters_b);

// console.log('letters_c');
// console.log(letters_a);

// Copiar arrays 
let letters_c = [...letters_a];
// console.log(letters_c); [a,b,c]

// Concatenar arrays
// let letters_d = [...letters_a, ...letters_b];
// let letters_d = letters_a.concat(letters_b);
// console.log(letters_d); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]


// Enviar un numero indeterminado de parametros a una funcion
const restParams = (...params) => console.log(params);
// prints the input as an array 
// restParams(1);
// restParams(1,2,3,4);
// restParams(1,2,3,4,5,6,7,8);
// restParams(1,2,3,4,5,6,7,8,9,10,11,12);

/// Minimos y maximos, si a estas funciones les pasamos un array esta retornara nan, ya que recibe parametros por separado
// console.log(Math.min(...numbers)); // 0
// console.log(Math.max(...numbers)); // 20

/// Eliminar numeros repetidos
// console.log(new Set(numbers)); // Set(11) { 20, 15, 10, 8, 7, 5, 4, 3, 2, 1, 0 }
// parseo a array
console.log([...new Set(numbers)]); // [20,15,10,8,7,5,3,2,1,0]