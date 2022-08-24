// Math es un objeto de tipo estatico,
// Para darle uso lo hacemos directo desde su nombre
// No se pueden crear objetos nuevos de tipo Math, ex: let numero = Math.new();

let numero = 9.3;

console.log(Math.abs(numero)); // numero absoluto
console.log(Math.round(numero)); // Redondea al numero mas cercano .5 hacia arriba
console.log(Math.ceil(numero)); // Redndea hacia arriba (siempre)
console.log(Math.floor(numero)); // Redndea hacia arriba (siempre)
console.log(Math.pow(numero, 2)); // potencia
console.log(Math.sqrt(numero)); // Raiz cuadrada
console.log(Math.random()); // numero al pseudo aleatorio
// numero random con limites Math.random() + (max - min) + min
console.log(Math.sign(numero)); // Devueve si el numero es positivo (1) o negativo (-)
console.log(Math.PI); // Pi
console.log(Math.E); // constante de eulerz