class Book {
	constructor(author, title, year, gender){
		this.author = author;
		this.title = title;
		this.year = year;
		this.gender = gender;
	}

	getAuthor(){
		return this.author;
	}
}

let books = new Array();

const addBook = () => {
	let author = document.getElementById("txt_author").value;
	let title = document.getElementById("txt_title").value;
	let year = document.getElementById("txt_year").value;
	let gender = document.getElementById("dd_gender").value;
	
	if(author == ''){
		alert("El author no debe de estar vacio");
		return
	}

	if(title == ''){
		alert("El titulo no debe de estar vacio");
		return
	}

	if(year.toString().length < 4){
		alert("El año no coincide con el formato");
		return
	}

	books.push(new Book(author,title,year,gender));
	alert(`Se agrego el libro ${title}`);
}

const showBooks = () => {
	let space = document.getElementById("book_space");
	space.innerHTML = "<br>";

	for(book of books){
		space.innerHTML += `Libro: ${book.title}, ${book.author}, ${book.gender}, ${book.year}  <br>`;  
	}
}

const showAuthors = () => {
	let space = document.getElementById("author_space");
	let authors =[];
	
	for(book of books){
		authors.push(book.getAuthor());
	}

	authors.sort();
	space.innerHTML = authors;
}

const showByGender = () => {
	let space = document.getElementById("gender_space");
	const gender = prompt('introduce el genero');
	space.innerHTML = "";

	let filtered_books = books.filter(book => { 
		if(book.gender == gender) {
			return book.title;
		}
	});
	
	console.log(filtered_books);
	space.innerHTML = filtered_books;
}
