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

let space = document.getElementById('lbl_texto');
class Point {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  calcArea() {
    return this.x * this.y;
  }
  // static methods cant be called by an instance of an object, this is accessible from class name
  static distance(a,b){
    return a * b;
  }
}

const p = new Point(2,3);
// space.innerHTML = p.calcArea();
// space.innerHTML = p.distance(); // throw error
// space.innerHTML = Point.distance(2,3); // return 6

let primera_persona = new Persona('will','alva',20);
console.log(primera_persona.apellido);
console.log(primera_persona.full_name);
primera_persona.saludar();

///// Example with animals
class Animal {

  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise`);
  }

}

class Dog extends Animal {
  speak(){
    console.log(`Dog ${this.name} barks`);
  }
}

class Cat extends Animal {
  speak(){
    super.speak();
    console.log(`${this.name} meows`);
  }
}

const gen_animal = new Animal('Dog');
gen_animal.speak(); // Dog makes a noise

const first_dog = new Dog('Rex');
first_dog.speak(); // Dog barks; just does the new function method cuz isnt overwrited whit keyword 'super'

const first_cat = new Cat('Charly');
first_cat.speak(); // Charly makes a noise, Charly meows