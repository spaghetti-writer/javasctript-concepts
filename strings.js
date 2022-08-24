let cadena = "Hola mundo otra vez";

// Metodos
// la cadena original no se modifica, en caso de requerirlo se debe de guardar en una nueva variable

console.log(cadena.length); // numero de caracteres en el string
console.log(cadena.toUpperCase()); // convierte toda la cadena a mayusculas
console.log(cadena.toLowerCase()); // convierte toda la cadena a minusculas
console.log(cadena.indexOf('o')); // retorna el index de la primera coincidencia
console.log(cadena.replace('mundo','sulimetext')); // remplaza el texto (busqueda, remplazo)
// [,param] -> Parametro opcional
console.log(cadena.substring(3, 7)); // extrae el textro en el intervalo dado, no extrae el final declarado
console.log(cadena.substring(3));
// output => a mu
console.log(cadena.slice(5,7)); // extrae el textro en el intervalo dado, no extrae el final declarado, 
// output => mu
console.log(cadena.slice(-2)); // puedes declarar un solo numero y este sera el inicia, acepta numeros negativos
// output => ez
console.log(cadena.slice(3,-8)); // ignora los caracteres finales indicados por el numero
// output => a mundo
console.log(cadena.trim()); // elimina los espacios al comienzo y al final
console.log(cadena.startsWith('m',5));// valida que el espacio indicado inicie con el caracter indicado, la posicion default es 0
console.log(cadena.endsWith('o', 10));// valida que el espacio indicado termine con el caracter indicado, default final
console.log(cadena.includes('n', 5)); // valida que el valor indicado exista en el string

console.log(cadena.repeat(3)); // imprime la cadena el numero de veces indidcadDo

/* Template string */

let nombre = 'Williams';
let apellido = "Alvarado";
let edad = 20;

console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años.`);