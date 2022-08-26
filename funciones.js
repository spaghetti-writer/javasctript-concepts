function hola_mundo(){
	console.log(this);
}

// hola_mundo();

const hello_world = () => console.log(this);
// const hello_world = () => { console.log(this); }

hello_world();