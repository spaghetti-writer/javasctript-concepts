// Bucles indeterminados (while(){}, do{}while())
/* Bucles determinados 
	for
	for of
*/
let numeros = [1,2,3,4,5,6,7,8];
let deep = numeros.length;
let string = 'Hola mundo';

//for (let i = 0; i < deep; i++) {
//	console.log(numeros[i]);
//}

// for (n of numeros) {
// 	console.log(n);
// }

// for(let i=0;i<string.length;i++){
// 	console.log(string[i]);
// }

// for(l of string){
// 	console.log(l);
// }

/* for in
	Sirve para recorrer las propiedades de un objeto, devolviendo las llaves de este en funcion de su posicion, en arrays normales devuelve los index
*/

let my_object =  { 
	name: "will",
	last_name: "alva",
	age: 20,
	hobby: "no info"
}


// console.log(my_object.length); // undefined

// for(let i=0;i<4;i++){ console.log(my_object[i]); } // undefined (4 times)

// for(key in my_object) { console.log(key); } // name, last_name, age, hobby

// for(key in my_object){ console.log(my_object[key]); } // will, alva, 20, no info

// for(key in numeros){ console.log(key); } // 0,1,2,3,4,5,6,7