let num = 2;

switch (num) {
	case 1:
		console.log('El numero vale 1')
		break;
	case 2:
		console.log('El numero vale 2')
		break;
	default:
		console.log('El numero vale 3')
		break;
}

switch (num) {
	case 1:
	case 3:
	case 5:
		console.log(`El numero ${num} es impar`);
		break;
	case 2:
	case 4:
	case 6:
		console.log(`El numero ${num} es par`);
		break;
}