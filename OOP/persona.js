class Persona {
	
	constructor(_nombre, _apellido, _edad) {
		// object properties
		this.nombre = _nombre;
		this.apellido = _apellido;
		this.edad = _edad;
		this.full_name = `${_nombre} ${_apellido}`;
	}

	// metodos
	saludar(){
		console.log(`hola, mi nombre es ${this.nombre}`);
	}

}

let primera_persona = new Persona('will','alva',20);
console.log(primera_persona.apellido);
console.log(primera_persona.full_name);
primera_persona.saludar();
