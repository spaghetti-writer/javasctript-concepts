const PI = 3.14; // Las constantes no se pueden modificar despues cuando son datos de tipo primitivo

let numero = 5; // Numero entero
let numero_decimal = 5.1; // Numero decimal
let palabra = 'Hola mundo'; // string
let respuesta = true; // booleano
// console.log(PI);

// Operadores
// Matematicos +; -; *; /; %;
// Asignacion =; +=; -=; *=; /=; %=;
// incremento | Decremento -> <Post (a++, a--), Pre (++a, --a)>

let numero_1 = 1; 
let numero_2 = 1; 
let numero_3 = 1; 
let numero_4 = 1; 

// Primero devuelven la variable y despues la incrementan-decrementan
console.log(numero_1++); // 1
console.log(numero_2--); // 1
// Primero incrementean-decrementan la variable, despues la devuelven
console.log(++numero_3); // 2
console.log(--numero_4); // 0

// MAP (object)

// work as array but with keys, as a hash on ruby
let objmap = new Map([['k1','v1'],['k2','v2']]);
console.log(objmap); // Map { k1 → "v1", k2 → "v2" }
console.log(objmap['k1']); // undefined
console.log(objmap.k1); // undefined
console.log(objmap.get('k1')); // v1
console.log(objmap.set('k1', 'jsjsjs')); // Map { k1 → "jsjsjs", k2 → "v2" }
console.log(objmap.has('k1')); // true, just return true or false
// delete('key') delete the key and his value
// clear delete all into the Map object
console.log('objmap'); // Map { k1 → "v1", k2 → "v2" }

// Map Iterator {}

for(let key of objmap.keys()){
  console.log(key);
} // k1, k2

for(let val of objmap.values()) {
  console.log(val);
} // jsjsjs, v2

for(let obj of objmap.entries()) {
  console.log(obj);
} // Array [ "k1", "jsjsjs" ], Array [ "k2", "v2" ]

// Map acepta diferente tipos de datos como key
let cMap = new Map([[1,'first'],['1','second']]); // Map { 1 → "first", 1 → "second" }
// console.log(cMap.get(1)); // first
// console.log(cMap.get('1')); // second
