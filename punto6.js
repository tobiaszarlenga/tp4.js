class Libro {
    constructor (ISBN, titulo, autor, numeroDePaginas){
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.autor = autor;
        this.numeroDePaginas = numeroDePaginas;
    }

    set cambiarTitulo(tituloNuevo) {
        this.titulo = tituloNuevo;
    }

    set cambiarISBN (ISBNnuevo) {   
        this.ISBN = ISBNnuevo;
    }

    set cambiarAutor(autorNuevo) {
        this.autor = autorNuevo;
    }
    set cambiarNumeroDePaginas(numeroDePaginasNuevo) {
        this.numeroDePaginas = numeroDePaginasNuevo;
    }
    get mostrarISBN() {
        return this.ISBN;
    }
    get mostrartitulo() {
        return this.titulo;
    }
    get mostrarAutor() {
        return this.autor;
    }
    get mostrarNumeroDePaginas() {
        return parseInt(this.numeroDePaginas);
    }

    mostrarLibro() {
        return `<p>El libro ${this.titulo}con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene paginas ${this.numeroDePaginas}</p>`
    }

}

function compararLibro(libro1, libro2){
    if (libro1.mostrarNumeroDePaginas > libro2.mostrarNumeroDePaginas){
        return `<p>el libro con mas paginas es ${libro1.mostrartitulo}</p>`
    } else if (libro1.mostrarNumeroDePaginas == libro2.mostrarNumeroDePaginas){
        return `<p>los libros tienen la misma cantidad de paginas</p>`
    } else {
        return `<p>el libro con mas paginas es ${libro2.mostrartitulo}</p>`
    }
}

let habitosAtomicos = new Libro (1231231, "Habitos Atomicos", "james clare", 324);
let leyesDelPoder = new Libro (8738273, `"las 48 Leyes del Poder"`, "Robert Green",748);

document.write(habitosAtomicos.mostrarLibro());

document.write(leyesDelPoder.mostrarLibro());

document.write(compararLibro(habitosAtomicos, leyesDelPoder));