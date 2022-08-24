let numero = 12
let numero_2 = 1
let top = 10

// Version basica
numero > top ? console.log(`El numero es mayor a ${top}`) : console.log(`El numero es menor a ${top}`);

// Varias operationes por condicion, se encierran con ()
// no puedes declarar variables dentro pero si reasignar
numero > top ? (
		console.log(`El numero es mayor a ${top}`),
		numero_2 += numero,
		console.log(numero_2)
	)
	: console.log(`El numero es menor a ${top}`);
